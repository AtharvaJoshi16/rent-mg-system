import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { responses } from "../../constants/responseMessages";
import { emailSchema } from "../../schemas/individualSchemas";
import { formatZodError } from "../../utils/formatZodError";

export const validateEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    emailSchema.parse(req.query.email);
    next();
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({
        errors: formatZodError(e),
      });
    } else {
      res.status(520).json({ message: responses.UNKNOWN });
    }
  }
};
