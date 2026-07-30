import { NextResponse } from "next/server";

interface QuotePayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<QuotePayload>;

  if (!body.name || !body.email || !body.phone || !body.service) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire to an email/CRM provider (e.g. Resend, SendGrid) before production launch.
  console.log("[quote] new request", body);

  return NextResponse.json({ ok: true });
}
