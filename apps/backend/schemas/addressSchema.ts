import z from "zod";
import { messages } from "../constants/validationMessages";
import { ownerId } from "./ownerSchema";
import { propertyId } from "./propertySchema";
import { renterId } from "./renterSchema";

export const addressSchema = z.object({
  id: z.string().cuid({
    message: messages.address.id,
  }),
  ownerId,
  propertyId,
  renterId,
  addressLine: z.string(),
  city: z.string(),
  state: z.string(),
  pincode: z.string(),
  electricityBill: z.string(),
  propertyTaxBill: z.string(),
});
