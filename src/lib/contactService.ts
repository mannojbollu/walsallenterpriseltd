/**
 * Contact form submission.
 *
 * This is the single place to connect a real backend:
 * - If VITE_WEB3FORMS_ACCESS_KEY is set (see .env.example), the enquiry is sent
 *   through Web3Forms (https://web3forms.com), which emails it to the address
 *   the access key was created for.
 * - Otherwise, if VITE_CONTACT_ENDPOINT is set, the form data is POSTed there
 *   as JSON (Formspree, Getform, a serverless function or your own API).
 * - With neither set, the dev server simulates a successful send. Production
 *   builds show an error instead, so an enquiry is never silently lost.
 *
 * To use something else, replace the body of `submitContact` and keep the same signature.
 */

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  /** Product line of interest (see `products` in src/data/content.ts). */
  commodity: string;
  /** Port or city of discharge. */
  destination: string;
  incoterm: string;
  message: string;
};

export class ContactSubmitError extends Error {}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

function request(payload: ContactPayload): { url: string; body: object } | null {
  if (WEB3FORMS_KEY) {
    return {
      url: "https://api.web3forms.com/submit",
      body: {
        access_key: WEB3FORMS_KEY,
        subject: `Website enquiry: ${payload.commodity} to ${payload.destination}`,
        from_name: "Walsall Enterprise Ltd website",
        // Web3Forms sets Reply-To from `email`, so replying answers the buyer.
        ...payload,
      },
    };
  }
  if (ENDPOINT) return { url: ENDPOINT, body: payload };
  return null;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const req = request(payload);
  if (!req) {
    if (import.meta.env.DEV) {
      // Demo mode: no backend connected yet.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.info("[contact] demo submission", payload);
      return;
    }
    throw new ContactSubmitError("Our enquiry form is temporarily unavailable. Please email or WhatsApp us instead.");
  }

  let response: Response;
  try {
    response = await fetch(req.url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(req.body),
    });
  } catch {
    throw new ContactSubmitError("We couldn't reach our server. Please check your connection and try again.");
  }

  // Web3Forms reports failures as { success: false } in the body.
  const result = WEB3FORMS_KEY ? ((await response.json().catch(() => null)) as { success?: boolean } | null) : null;
  if (!response.ok || (WEB3FORMS_KEY && !result?.success)) {
    throw new ContactSubmitError("Something went wrong sending your message. Please try again shortly.");
  }
}
