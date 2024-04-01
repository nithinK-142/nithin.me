import { NextRequest, NextResponse } from "next/server";
import type { SentMessageInfo } from "nodemailer";
import { sendMail } from "@/utils/mailer";
export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
    const mailResponse = await sendMail(data);

    const { accepted } = mailResponse as SentMessageInfo;
    if (accepted.length === 0) {
      return NextResponse.json(
        { error: "Form Submission Failed!" },
        { status: 500 }
      );
    }

    const response = NextResponse.json(
      { message: "Form Submitted!" },
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
