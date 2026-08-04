"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TextField, TextAreaField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { isValidEmail, required } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");
    const website = String(form.get("website") ?? ""); // honeypot

    const nextErrors: Record<string, string> = {};
    if (!required(name)) nextErrors.name = "Please enter your name.";
    if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!required(message)) nextErrors.message = "Tell us a little about your request.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setServerError(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, website }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : null);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-primary/20 bg-primary-tint p-8">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h3 className="font-display text-lg font-semibold text-ink">Message received</h3>
        <p className="text-[14px] text-slate">
          Thank you for reaching out. A member of the SevenSkys team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-busy={status === "loading"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Full name" name="name" autoComplete="name" error={errors.name} required />
        <TextField label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      </div>
      <TextField label="Email address" name="email" type="email" autoComplete="email" error={errors.email} required />
      <TextAreaField label="Message" name="message" rows={5} error={errors.message} required />
      {/* Honeypot: hidden from real visitors, catches basic bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      />
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {serverError || "Something went wrong sending your message. Please try again or call us directly."}
        </p>
      )}
      <Button type="submit" showArrow={false} className="justify-center sm:w-auto">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
