import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

// Simple in-memory rate limit: IP -> [timestamps]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;

  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (ts) => now - ts < windowMs
  );

  if (timestamps.length >= maxRequests) {
    return false;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip + "alpine-salt").digest("hex").slice(0, 16);
}

export async function POST(request: NextRequest) {
  const successResponse = {
    success: true,
    message: "Request received. We'll be in touch shortly.",
  };

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(successResponse); // Silent rate limit
    }

    const body = await request.json();
    const {
      full_name,
      email,
      phone,
      company,
      project_type,
      city_zip,
      description,
      consent,
    } = body;

    // Basic validation
    if (!full_name || !email || !phone || !city_zip || !consent) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const ipHash = hashIp(ip);
    const now = new Date().toISOString();
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Write to Supabase
    try {
      const { error } = await supabase.from("ad_leads").insert({
        full_name,
        email,
        phone,
        company: company || null,
        project_type: project_type || null,
        city_zip,
        description: description || null,
        consent: !!consent,
        source: "website",
        ip_hash: ipHash,
        created_at: now,
      });

      if (error) {
        console.error("[Alpine] Supabase insert error:", error);
      }
    } catch (dbErr) {
      console.error("[Alpine] Supabase exception:", dbErr);
    }

    // Send email via Resend
    try {
      const subject = `New Project Inquiry — ${project_type || "General"} | ${city_zip}`;

      const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; margin: 0; padding: 0; background: #f4f4f4; }
  .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5; }
  .header { background: #165B38; color: white; padding: 24px 32px; }
  .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
  .header p { margin: 4px 0 0; font-size: 14px; opacity: 0.8; }
  .body { padding: 32px; }
  .field { margin-bottom: 18px; }
  .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; }
  .field-value { font-size: 15px; color: #1a1a1a; }
  .divider { border: none; border-top: 1px solid #eee; margin: 24px 0; }
  .footer { background: #17262B; color: rgba(255,255,255,0.6); padding: 16px 32px; font-size: 12px; }
  .badge { display: inline-block; background: #F4F2ED; color: #165B38; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #DEE3DC; margin-top: 4px; }
</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>New Project Inquiry</h1>
    <p>Alpine Demolition — Website Lead</p>
  </div>
  <div class="body">
    <div class="field">
      <div class="field-label">Full Name</div>
      <div class="field-value">${full_name}</div>
    </div>
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${email}" style="color:#165B38">${email}</a></div>
    </div>
    <div class="field">
      <div class="field-label">Phone</div>
      <div class="field-value"><a href="tel:${phone.replace(/\D/g, "")}" style="color:#165B38">${phone}</a></div>
    </div>
    ${company ? `<div class="field"><div class="field-label">Company</div><div class="field-value">${company}</div></div>` : ""}
    <hr class="divider" />
    <div class="field">
      <div class="field-label">Project Type</div>
      <div class="field-value">${project_type ? `<span class="badge">${project_type}</span>` : "Not specified"}</div>
    </div>
    <div class="field">
      <div class="field-label">City / ZIP</div>
      <div class="field-value">${city_zip}</div>
    </div>
    ${description ? `<div class="field"><div class="field-label">Project Description</div><div class="field-value" style="white-space:pre-wrap;background:#f9f9f9;padding:12px;border-radius:4px;font-size:14px;">${description}</div></div>` : ""}
    <hr class="divider" />
    <div class="field">
      <div class="field-label">Submitted</div>
      <div class="field-value" style="color:#888;font-size:14px;">${submissionTime} (Mountain Time)</div>
    </div>
  </div>
  <div class="footer">
    This lead was submitted via alpinedemolition.com. Reply directly to this email or call the contact at the number above.
  </div>
</div>
</body>
</html>`;

      await resend.emails.send({
        from: "Alpine Demolition <noreply@mail.alpinedemolition.com>",
        to: "jimmy@alpinedemolition.com",
        subject,
        html: htmlBody,
        replyTo: email,
      });
    } catch (emailErr) {
      console.error("[Alpine] Resend error:", emailErr);
    }

    return NextResponse.json(successResponse);
  } catch (err) {
    console.error("[Alpine] Lead API error:", err);
    return NextResponse.json(successResponse);
  }
}
