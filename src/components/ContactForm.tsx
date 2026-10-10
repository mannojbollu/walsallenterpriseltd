import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { CircleAlert, LoaderCircle } from "lucide-react";
import { ContactSubmitError, submitContact, type ContactPayload } from "../lib/contactService";
import { commodities } from "../data/content";
import { Button } from "./Button";
import { SmartLink } from "./SmartLink";

type Field = keyof ContactPayload;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  commodity: "",
  destination: "",
  incoterm: "",
  message: "",
};

// Terms confirmed by the client: EXW, FOB, CFR. Keep in step with `hero.facts` in src/data/content.ts.
const incoterms = [
  { value: "EXW", label: "EXW – Ex Works Walsall" },
  { value: "FOB", label: "FOB – Free On Board, UK port" },
  { value: "CFR", label: "CFR – Cost and Freight, port of discharge" },
  { value: "Unsure", label: "Not sure yet – advise me" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

function validate(values: ContactPayload): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (!values.commodity) errors.commodity = "Select a commodity line.";
  if (values.destination.trim().length < 2) errors.destination = "Enter the port or city of discharge.";
  if (values.message.trim().length < 20)
    errors.message = "Add quantity, container size or grade requirements (at least 20 characters).";
  return errors;
}

const fieldOrder: Field[] = ["name", "company", "email", "phone", "commodity", "destination", "incoterm", "message"];

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  // The form collapses on success, so bring the confirmation into view and focus it for screen readers.
  useEffect(() => {
    if (status !== "success") return;
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    successRef.current?.focus({ preventScroll: true });
  }, [status]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-validate live once a field has been touched, so errors clear as the user fixes them.
    if (touched[name as Field]) setErrors(validate(next));
  };

  const onBlur = (field: Field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])));

    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    // Bots fill hidden fields; silently pretend success.
    if (honeypot.current?.value) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setSubmitError("");
    try {
      await submitContact(
        Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])) as ContactPayload,
      );
      setStatus("success");
      setValues(empty);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof ContactSubmitError ? err.message : "Something went wrong sending your enquiry. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border-l-4 border-navy-900 py-6 pl-6 outline-none">
        <p className="label text-moss-700">Enquiry received</p>
        <h3 className="mt-3 text-2xl font-semibold">Thank you. We will reply within one business day.</h3>
        <p className="mt-3 max-w-md text-steel-600">
          Expect a per-kg price list for the lines you selected and a proposed container plan.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";
  const show = (f: Field) => (touched[f] ? errors[f] : undefined);

  const inputClass = (f: Field) =>
    `block w-full border-0 border-b-2 bg-transparent px-0 py-2.5 text-base text-navy-900 placeholder:text-steel-400 outline-none transition-colors disabled:opacity-60 ${
      show(f) ? "border-red-600 focus:border-red-700" : "border-steel-300 hover:border-steel-400 focus:border-navy-900"
    }`;

  const label = (f: Field, text: string, required = true) => (
    <label htmlFor={`${uid}-${f}`} className="label mb-1 block text-steel-600">
      {text}
      {required ? (
        <span className="ml-1 text-moss-700" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 tracking-normal text-steel-400 normal-case">(optional)</span>
      )}
    </label>
  );

  const error = (f: Field) =>
    show(f) ? (
      <p id={`${uid}-${f}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
        <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
        {show(f)}
      </p>
    ) : null;

  const aria = (f: Field) => ({
    id: `${uid}-${f}`,
    name: f,
    "aria-invalid": show(f) ? true : undefined,
    "aria-describedby": show(f) ? `${uid}-${f}-error` : undefined,
    disabled: submitting,
    value: values[f],
    onChange,
    onBlur: () => onBlur(f),
    className: inputClass(f),
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-busy={submitting}>
      {status === "error" && (
        <div role="alert" className="mb-6 flex gap-3 border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Your enquiry wasn't sent</p>
            <p className="mt-0.5">{submitError}</p>
          </div>
        </div>
      )}

      <fieldset>
        <legend className="label mb-5 text-moss-700">A. Contact</legend>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <div>
            {label("name", "Full name")}
            <input {...aria("name")} type="text" autoComplete="name" />
            {error("name")}
          </div>
          <div>
            {label("company", "Company", false)}
            <input {...aria("company")} type="text" autoComplete="organization" />
            {error("company")}
          </div>
          <div>
            {label("email", "Email")}
            <input {...aria("email")} type="email" autoComplete="email" inputMode="email" />
            {error("email")}
          </div>
          <div>
            {label("phone", "Phone / WhatsApp", false)}
            <input {...aria("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="+63 917 000 0000" />
            {error("phone")}
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-12">
        <legend className="label mb-5 text-moss-700">B. Shipment</legend>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <div>
            {label("commodity", "Commodity line")}
            <select {...aria("commodity")}>
              <option value="">Select…</option>
              {commodities.map((c) => (
                <option key={c.title} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
            {error("commodity")}
          </div>
          <div>
            {label("destination", "Port of discharge")}
            <input {...aria("destination")} type="text" placeholder="e.g. Karachi, PK" />
            {error("destination")}
          </div>
          <div className="sm:col-span-2">
            {label("incoterm", "Preferred terms", false)}
            <select {...aria("incoterm")}>
              <option value="">Select…</option>
              {incoterms.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {error("incoterm")}
          </div>
          <div className="sm:col-span-2">
            {label("message", "Quantity and requirements")}
            <textarea
              {...aria("message")}
              rows={5}
              placeholder="Number of 40' containers, ratio for mixed loads, grade requirements, target shipment month."
              className={`${inputClass("message")} resize-y`}
            />
            {error("message")}
          </div>
        </div>
      </fieldset>

      {/* Honeypot for spam bots: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Leave this field empty
          <input ref={honeypot} type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-12 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-steel-500 sm:max-w-xs">
          We use these details only to reply to your enquiry. See our{" "}
          <SmartLink href="/privacy" className="underline underline-offset-2 hover:text-navy-900">
            privacy policy
          </SmartLink>
          .
        </p>
        <Button type="submit" size="lg" disabled={submitting} arrow={!submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Submit enquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
