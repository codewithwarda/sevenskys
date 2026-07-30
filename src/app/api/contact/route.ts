import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire to an email/CRM provider (e.g. Resend, SendGrid) before production launch.
  console.log("[contact] new enquiry", body);

  return NextResponse.json({ ok: true });
}
