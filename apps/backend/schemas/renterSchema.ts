import z from "zod";
import { messages } from "../constants/validationMessages";
export const renterId = z.number().refine(
  (val) => {
    const length = val.toString().length;
    return length === 8;
  },
  {
    message: messages.renter.id,
  }
);
