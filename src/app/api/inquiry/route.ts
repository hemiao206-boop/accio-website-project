import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, product, requirements } = data;

    const transporter = nodemailer.createTransport({
      host: 'smtp.263.net',
      port: 465,
      secure: true,
      auth: {
        user: 'phoebe@ruichuangmetal.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background-color:#ffffff"><div style="background-color:#1e293b;padding:24px;text-align:center;border-bottom:4px solid #b88e2f"><h1 style="color:#ffffff;margin:0;font-size:20px;letter-spacing:1px">RUICHUANG METAL INQUIRY</h1></div><div style="padding:32px;color:#374151;line-height:1.6"><p style="font-size:16px;margin-bottom:24px">You have received a new business inquiry from the website:</p><div style="background-color:#f9fafb;padding:20px;border-radius:8px;margin-bottom:24px;border-left:4px solid #b88e2f"><h2 style="font-size:18px;font-weight:bold;margin-top:0;color:#111827;border-bottom:1px solid #e5e7eb;padding-bottom:8px;margin-bottom:16px">Customer Information</h2><table style="width:100%;border-collapse:collapse"><tr><td style="padding:8px 0;color:#6b7280;width:120px">Name:</td><td style="padding:8px 0;font-weight:bold;color:#111827">' + fullName + '</td></tr><tr><td style="padding:8px 0;color:#6b7280">Email:</td><td style="padding:8px 0;font-weight:bold;color:#111827"><a href="mailto:' + email + '" style="color:#b88e2f;text-decoration:underline">' + email + '</a></td></tr></table></div><div style="margin-bottom:24px"><h2 style="font-size:18px;font-weight:bold;color:#111827;border-bottom:1px solid #e5e7eb;padding-bottom:8px;margin-bottom:16px">Inquiry Details</h2><p style="margin:0"><strong>Interested Product:</strong> <span style="color:#111827">' + (product || 'General Inquiry') + '</span></p><div style="margin-top:16px;padding:16px;background-color:#fffbeb;border:1px solid #fde68a;border-radius:6px;font-style:italic">"' + requirements + '"</div></div><div style="border-top:1px solid #e5e7eb;padding-top:24px;font-size:13px;color:#9ca3af"><p style="margin-bottom:4px"><strong>Owner&#39;s Action:</strong></p><p style="margin:0">Clicking &quot;Reply&quot; will directly email the buyer. You can also forward this to your sales team.</p><p style="margin-top:12px">Sent via: <a href="https://ruichuangmetal.com" style="color:#9ca3af">ruichuangmetal.com</a></p></div></div></div>';

    await transporter.sendMail({
      from: '"Ruichuang Metal Inquiry" <phoebe@ruichuangmetal.com>',
      to: 'admin@ruichuangmetal.com',
      replyTo: email,
      subject: '[New Inquiry] ' + (product || 'Metal Product') + ' - from ' + fullName,
      html: htmlContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully! We will contact you shortly.' 
    });
  } catch (err: any) {
    console.error('SMTP Error:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
