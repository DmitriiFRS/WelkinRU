import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function GET(req: Request, res: Response) {}
export async function POST(req: Request, res: Response) {
   const formData = require("form-data");
   const Mailgun = require("mailgun.js");

   const mailgun = new Mailgun(formData);
   const client = mailgun.client({ username: "api", key: API_KEY });

   const messageData = {
      from: "Excited User <me@samples.mailgun.org>",
      to: "foo@example.com, bar@example.com",
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
   };

   try {
      const emailRes = await client.messages.create(DOMAIN, messageData);
      return NextResponse.json({ emailRes });

      console.log(emailRes);
   } catch (err: any) {
      console.error("error", err);
   }
}
