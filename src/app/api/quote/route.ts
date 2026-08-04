import { NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/email";
import { getClientIp, isHoneypotFilled, isRateLimited } from "@/lib/spam";
import { isValidEmail, isValidPhone, required } from "@/lib/validation";
import { getServiceBySlug } from "@/lib/data/services";

interface QuotePayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  details?: string;
  website?: string; // honeypot field
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = (await request.json()) as Partial<QuotePayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, humans never see this one.
  // Pretend success so bots don't learn to avoid it, but skip sending the email.
  if (isHoneypotFilled(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const name = (body.name || "").trim();
  const company = (body.company || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();
  const details = (body.details || "").trim();

  const errors: Record<string, string> = {};
  if (!required(name)) errors.name = "Please enter your name.";
  if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!isValidPhone(phone)) errors.phone = "Enter a valid phone number.";
  if (!required(service)) errors.service = "Select a service.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fieldErrors: errors }, { status: 400 });
  }

  const serviceLabel = getServiceBySlug(service)?.name || service;

  try {
    await sendEnquiryEmail({
      subject: `New quote request — ${serviceLabel}`,
      heading: "New quote request",
      intro: "A visitor submitted the Request a Quote form on the SevenSkys website.",
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Company", value: company },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Service", value: serviceLabel },
        { label: "Details", value: details },
      ],
    });
  } catch (err) {
    console.error("[quote] failed to send email", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request right now. Please call or WhatsApp us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
