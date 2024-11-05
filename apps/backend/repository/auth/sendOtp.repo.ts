import {
  MailOptions,
  SentMessageInfo,
} from "nodemailer/lib/sendmail-transport";
import { otpEmailData } from "../../constants/otpEmail";
import { generateOtp } from "../../utils/generateOtp";
import { sendOtpEmail } from "../../utils/sendOtpEmail";

export const sendOtp = async (
  email: string
): Promise<SentMessageInfo | any> => {
  const otp = generateOtp();
  const mailOptions: MailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: otpEmailData.subject,
    html: otpEmailData.text(otp),
  };

  const handleEmailResponse = (err: Error | null, info: SentMessageInfo) => {
    if (err) {
      console.info(err.message);
    } else {
      console.info(info.messageId);
    }
  };
  return await sendOtpEmail(
    process.env.EMAIL!,
    process.env.PASS!,
    mailOptions,
    handleEmailResponse
  );
};
