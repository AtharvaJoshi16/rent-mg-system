import { Request, Response } from "express";
import { sendOtp } from "../../repository/auth/sendOtp.repo";

export const sendOtpController = async (req: Request, res: Response) => {
  const { email } = req.query;
  const response = await sendOtp(email as string);
  res.status(response);
};
