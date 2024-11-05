import { Router } from "express";
import { sendOtpController } from "../../../controllers/auth/sendOtp.controller";
import { validateEmail } from "../../../middlewares/validations/validateEmail";

const router = Router();

// /v1/auth/verify-email
router.post("/send-otp-to-email", validateEmail, sendOtpController);

export { router as authRouter };
