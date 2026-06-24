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

    const htmlContent = [
      '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">',
      '<div style="background:#1e293b;padding:24px;text-align:center;border-bottom:4px solid #b88e2f">',
      '<h1 style="color:#fff;margin:0;font-size:20px">RUICHUANG METAL INQUIRY</h1>',
      '</div>',
      '<div style="padding:32px;color:#374151;line-height:1.6">',
      '<p style="font-size:16px">New inquiry from ruichuangmetal.com:</p>',
      '<div style="background:#f9fafb;padding:20px;border-radius:8px;border-left:4px solid #b88e2f">',
      '<h2 style="font-size:18px;color:#111827;margin:0 0 16px 0">Customer Information</h2>',
      '<p><strong>Name:</strong> ' + fullName + '</p>',
      '<p><strong>Email:</strong> <a href="mailto:' + email + '">' + email + '</a></p>',
      '</div>',
      '<div style="margin-top:24px">',
      '<h2 style="font-size:18px;color:#111827;margin:0 0 16px 0">Inquiry Details</h2>',
      '<p><strong>Product:</strong> ' + (product || 'General Inquiry') + '</p>',
      '<p><strong>Requirements:</strong> ' + requirements + '</p>',
      '</div>',
      '<div style="border-top:1px solid #e5e7eb;padding-top:24px;font-size:13px;color:#9ca3af">',
      '<p>Click Reply to directly email the buyer.</p>',
      '<p>Sent via <a href="https://ruichuangmetal.com">ruichuangmetal.com</a></p>',
      '</div>',
      '</div>',
      '</div>'
    ].join('');

    await transporter.sendMail({
      from: 'Ruichuang Metal Inquiry <phoebe@ruichuangmetal.com>',
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
