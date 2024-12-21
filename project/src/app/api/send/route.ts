import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const subject = url.searchParams.get("subject");
  const message = url.searchParams.get("message");
    
  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing email, subject, or message" },
      { status: 400 }
    );
  }

  try {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '58137@etu.he2b.be',
      subject: subject,
      html: `<p>mail de : ${email}</p><p>${message}</p>`,
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}