import { NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/email";
import { getClientIp, isHoneypotFilled, isRateLimited } from "@/lib/spam";
import { isValidEmail, required } from "@/lib/validation";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // honeypot field
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (isHoneypotFilled(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  const errors: Record<string, string> = {};
  if (!required(name)) errors.name = "Please enter your name.";
  if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!required(message)) errors.message = "Tell us a little about your request.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fieldErrors: errors }, { status: 400 });
  }

  try {
    await sendEnquiryEmail({
      subject: `New website enquiry from ${name}`,
      heading: "New contact enquiry",
      intro: "A visitor submitted the Contact form on the SevenSkys website.",
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Message", value: message },
      ],
    });
  } catch (err) {
    console.error("[contact] failed to send email", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message right now. Please call or WhatsApp us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
