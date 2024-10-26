import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ownerSchema } from "../../schemas/ownerSchema";
import { formatZodError } from "../../utils/formatZodError";

export const validateOwnerData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  try {
    ownerSchema.parse(data);
    next();
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({
        errors: formatZodError(e),
      });
    } else {
      res.status(520).json({ message: "Unknown error" });
    }
  }
};
