import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const full_name   = fd.get("full_name")?.toString()   || "";
    const email       = fd.get("email")?.toString()       || "";
    const phone       = fd.get("phone")?.toString()       || "";
    const cover_letter = fd.get("cover_letter")?.toString() || "";
    const resume      = fd.get("resume") as File | null;

    if (!full_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (resume && resume.size > 0) {
      const buf = Buffer.from(await resume.arrayBuffer());
      attachments.push({ filename: resume.name || "resume.pdf", content: buf });
    }

    await resend.emails.send({
      from: "Alpine Demolition Jobs <noreply@mail.alpinedemolition.com>",
      to: ["jimmy@alpinedemolition.com"],
      replyTo: email,
      subject: `Job Application — Demolition Laborer — ${full_name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#17262B;padding:24px 32px">
            <h2 style="color:#fff;margin:0;font-size:20px">New Job Application</h2>
            <p style="color:#76B852;margin:4px 0 0;font-size:13px">DEMOLITION LABORER</p>
          </div>
          <div style="padding:32px;background:#f9f9f7;border:1px solid #e0e0d8">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:700;text-transform:uppercase;width:120px">Name</td>
                  <td style="padding:8px 0;font-size:15px;color:#17262B">${full_name}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:700;text-transform:uppercase">Email</td>
                  <td style="padding:8px 0;font-size:15px"><a href="mailto:${email}" style="color:#165B38">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:700;text-transform:uppercase">Phone</td>
                  <td style="padding:8px 0;font-size:15px"><a href="tel:${phone}" style="color:#165B38">${phone}</a></td></tr>
            </table>
            <div style="margin-bottom:8px;font-size:12px;color:#888;font-weight:700;text-transform:uppercase">Cover Letter</div>
            <div style="background:#fff;border:1px solid #e0e0d8;padding:16px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap">${cover_letter}</div>
            ${attachments.length > 0 ? `<p style="margin-top:20px;font-size:13px;color:#555">📎 Resume attached: <strong>${attachments[0].filename}</strong></p>` : '<p style="margin-top:20px;font-size:13px;color:#999">No resume attached.</p>'}
          </div>
        </div>
      `,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
