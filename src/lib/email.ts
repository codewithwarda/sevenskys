import { Resend } from "resend";
import { SITE } from "@/lib/utils";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Falls back to Resend's shared test sender so email works immediately.
// Once the sevenskys.co domain is verified in the Resend dashboard, set
// RESEND_FROM_EMAIL to a real address on that domain for better deliverability.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "SevenSkys Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.RESEND_TO_EMAIL || SITE.email;

export interface EmailField {
  label: string;
  value: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderEnquiryEmail(heading: string, intro: string, fields: EmailField[]): string {
  const rows = fields
    .filter((f) => f.value && f.value.trim().length > 0)
    .map(
      (f) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #ECEBF5;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8A87A6;white-space:nowrap;vertical-align:top;width:150px;">
            ${escapeHtml(f.label)}
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #ECEBF5;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#201E28;white-space:pre-wrap;">
            ${escapeHtml(f.value)}
          </td>
        </tr>`
    )
    .join("");

  return `
  <!doctype html>
  <html>
    <body style="margin:0;padding:0;background-color:#F3F2FA;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F2FA;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;">
              <tr>
                <td style="background-color:#141046;padding:24px 32px;">
                  <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:#ffffff;letter-spacing:0.04em;">
                    SEVEN<span style="color:#8B7FE8;">SKYS</span>
                  </span>
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#B9B6D9;margin-top:4px;">
                    Group of Companies
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 32px 8px 32px;">
                  <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;color:#201E28;">${escapeHtml(heading)}</h1>
                  <p style="margin:8px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#5F5A59;">${escapeHtml(intro)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 24px 24px 24px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ECEBF5;">
                    ${rows}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 32px 28px 32px;border-top:1px solid #ECEBF5;">
                  <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9C98B5;">
                    Sent automatically from the SevenSkys Group of Companies website (${escapeHtml(SITE.domain)}).
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

export async function sendEnquiryEmail({
  subject,
  heading,
  intro,
  fields,
  replyTo,
}: {
  subject: string;
  heading: string;
  intro: string;
  fields: EmailField[];
  replyTo?: string;
}) {
  const resend = getResendClient();
  const html = renderEnquiryEmail(heading, intro, fields);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: replyTo || undefined,
    subject,
    html,
  });

  if (error) {
    throw new Error(typeof error === "string" ? error : error.message || "Resend failed to send the email.");
  }
}
