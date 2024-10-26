import { z } from "zod";
import { messages } from "../constants/validationMessages";
import { ownerId } from "./ownerSchema";
import { renterId } from "./renterSchema";

export const emergencyDetailsSchema = z.object({
  id: z.string().cuid({ message: messages.emergencyDetails.id }),
  ownerId,
  renterId,
  phone1: z.number(),
  phone2: z.number(),
  email: z.string().email(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  relation: z.string(),
});
