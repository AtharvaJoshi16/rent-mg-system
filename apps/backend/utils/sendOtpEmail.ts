import nodemailer from "nodemailer";
import {
  MailOptions,
  SentMessageInfo,
} from "nodemailer/lib/sendmail-transport";
import { promisify } from "util";

export const sendOtpEmail = async (
  senderEmail: string,
  password: string,
  mailOptions: MailOptions,
  handler: (err: Error | null, info: SentMessageInfo) => void
): Promise<SentMessageInfo | any> => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: senderEmail,
      pass: password,
    },
  });
  const sendMail = promisify(transporter.sendMail.bind(transporter));
  try {
    const response: SentMessageInfo = await sendMail(mailOptions, handler);
    return response;
  } catch (e) {
    return e;
  }
};
