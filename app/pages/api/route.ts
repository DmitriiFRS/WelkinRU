import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASS;

export async function POST(request: NextRequest) {
   try {
      const { name, tel, question } = await request.json();

      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: "localhost",
         port: 587,
         auth: {
            user: email,
            pass: pass,
         },
      });
      const mailOption = {
         from: "dmitriifrs@gmail.com",
         to: "barrakud3@gmail.com",
         subject: "send email test",
         html: `
         <h3>Hello from nodemailer</h3>
      `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "email send seccess" }, { status: 200 });
   } catch (err: any) {
      console.log(err);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
   }
}
