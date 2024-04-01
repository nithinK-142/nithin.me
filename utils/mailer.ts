import { FormSchemaType } from "@/app/(routes)/contact/Form";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const sendMail = async (data: FormSchemaType) => {
  const { name, email, subject = "no subject", message } = data;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.USER}>`,
      to: process.env.USER,
      subject: subject,
      html: `<div style="border: 1px solid #ccc; padding: 20px; border-radius: 5px; background-color: #f9f9f9; font-family: Arial, sans-serif; max-width: 500px;">
      <h1 style="font-size: 1.4em; margin: 0 0 5px 0; color: #333;font-weight: 400;">${name}</h1>
      <h4 style="font-size: 1.1em; margin: 0 0 5px 0; color: #666;">${email}</h4>
      <p style="font-size: 1.5em; margin: 0;margin-block: 1rem color: #555;">${message}</p>
    </div>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
