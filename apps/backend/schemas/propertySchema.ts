import z from "zod";
import { messages } from "../constants/validationMessages";
import { Preference } from "../interfaces/preference.enum";
import { PropertyStatus } from "../interfaces/propertyStatus.enum";
import { PropertyType } from "../interfaces/propertyType.enum";
import { addressSchema } from "./addressSchema";
import { ownerId } from "./ownerSchema";
import { roomDetailsSchema } from "./roomDetailsSchema";

export const propertyId = z.number().refine(
  (val) => {
    const length = val.toString().length;
    return length === 8;
  },
  {
    message: messages.property.id,
  }
);

export const propertySchema = z.object({
  ownerId,
  isVerified: z.boolean().optional(),
  status: z.enum(
    [
      PropertyStatus.AVAILABLE,
      PropertyStatus.NOT_RENTING_ANYMORE,
      PropertyStatus.PENDING_APPROVAL,
      PropertyStatus.RENTED_OUT,
      PropertyStatus.UNDER_MAINTENANCE,
    ],
    { message: messages.property.status }
  ),
  address: addressSchema,
  nextAvailableDate: z.date().optional(),
  rent: z.number().optional(),
  name: z.string().optional(),
  description: z.string(),
  photos: z.array(z.string()),
  type: z.enum(
    [PropertyType.APARTMENT, PropertyType.HOUSE, PropertyType.ROOMS],
    {
      message: messages.property.type,
    }
  ),
  preferred: z.enum([Preference.FAMILY, Preference.BACHELORS, Preference.ANY], {
    message: messages.property.preferred,
  }),
  roomDetails: roomDetailsSchema,
});
