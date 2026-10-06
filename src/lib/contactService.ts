/**
 * Contact form submission.
 *
 * This is the single place to connect a real backend. By default:
 * - If VITE_CONTACT_ENDPOINT is set (see .env.example), the form data is
 *   POSTed there as JSON. This works with Formspree, Getform, Basin, a
 *   serverless function, or your own API.
 * - Otherwise a demo handler simulates a successful send after a short delay.
 *
 * To use something else (EmailJS, Resend via a serverless function, etc.),
 * replace the body of `submitContact` and keep the same signature.
 */

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  /** Commodity line of interest (see `commodities` in src/data/content.ts). */
  commodity: string;
  /** Port or city of discharge. */
  destination: string;
  incoterm: string;
  message: string;
};

export class ContactSubmitError extends Error {}

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export async function submitContact(payload: ContactPayload): Promise<void> {
  if (!ENDPOINT) {
    // Demo mode: no backend connected yet.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    if (import.meta.env.DEV) console.info("[contact] demo submission", payload);
    return;
  }

  let response: Response;
  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactSubmitError("We couldn't reach our server. Please check your connection and try again.");
  }

  if (!response.ok) {
    throw new ContactSubmitError("Something went wrong sending your message. Please try again shortly.");
  }
}
