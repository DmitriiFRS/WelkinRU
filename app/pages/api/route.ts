import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASS;

export async function POST(request: NextRequest) {
   try {
      const { name, tel, question } = await request.json();

      const transporter = nodemailer.createTransport({
         host: "smtp.mail.ru",
         port: 465,
         secure: true,
         auth: {
            user: email,
            pass: pass,
         },
      });
      const mailOption = {
         from: email,
         to: email,
         subject: "Вопрос от пользователя с сайта welkingroup.ru",
         html: `
         <p>Имя: ${name}</p>
         <p>Телефон: ${tel}</p>
         <p>Вопрос: ${question}</p>
      `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "email send seccess" }, { status: 200 });
   } catch (err: any) {
      console.log(err);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
   }
}
