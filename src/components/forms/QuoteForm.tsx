"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TextField, TextAreaField, SelectField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { isValidEmail, isValidPhone, required } from "@/lib/validation";
import { services } from "@/lib/data/services";

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const details = String(form.get("details") ?? "");

    const nextErrors: Record<string, string> = {};
    if (!required(name)) nextErrors.name = "Please enter your name.";
    if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!isValidPhone(phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!required(service)) nextErrors.service = "Select a service.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, service, details }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-primary/20 bg-primary-tint p-8">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h3 className="font-display text-lg font-semibold text-ink">Quote request received</h3>
        <p className="text-[14px] text-slate">
          Thank you. Our team will review your requirements and respond with a fixed quote within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-busy={status === "loading"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Full name" name="name" autoComplete="name" error={errors.name} required />
        <TextField label="Company (optional)" name="company" autoComplete="organization" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Email address" name="email" type="email" autoComplete="email" error={errors.email} required />
        <TextField label="Phone number" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
      </div>
      <SelectField label="Service required" name="service" defaultValue={preselected} error={errors.service} required>
        <option value="" disabled>
          Select a service
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </SelectField>
      <TextAreaField label="Route, headcount or job details" name="details" rows={5} />
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}
      <Button type="submit" showArrow={false} className="justify-center sm:w-auto">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </span>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
