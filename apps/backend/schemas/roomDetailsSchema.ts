import { z } from "zod";
import { messages } from "../constants/validationMessages";
import { RentType } from "../interfaces/rentType";
import { propertyId } from "./propertySchema";

export const roomDetailsSchema = z.object({
  id: z.string().cuid({ message: messages.property.roomDetails.id }),
  propertyId,
  quantity: z.number(),
  rent: z.number().optional(),
  perPersonRent: z.number().optional(),
  rentType: z.enum([RentType.TOTAL, RentType.PER_PERSON], {
    message: messages.property.roomDetails.rentType,
  }),
});
