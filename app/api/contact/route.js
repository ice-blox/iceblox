import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_a2Y5FwHR_BjB959Bby5X5otXDyTxpwew2");

export async function POST(request) {
  try {
    const { name, message, phoneNumber, email } = await request.json();

    if (!name || !message || !phoneNumber || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: email,
      to: ["harshshinde5606@gmail.com"],
      subject: `${name}`,
      html: `
        <p><strong>Email From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${toEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p>${message}</p>
        
      `,
    });

    return NextResponse.json(
      { message: "Email Sent", id: result.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
