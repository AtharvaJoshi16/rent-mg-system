import bcrypt from "bcrypt";
import { creationSuccessMessage } from "../../constants/responseMessages";
import { prismaErrorHandler } from "../../handlers/prismaErrorHandler";
import { PrismaOwnerData } from "../../interfaces/owner";
import { CustomCreateResponse } from "../../interfaces/responses";
import { generateId } from "../../utils/generateId";
import { db } from "../../utils/prismaClient";

export const createOwner = async (
  data: PrismaOwnerData
): Promise<CustomCreateResponse> => {
  const newId = generateId();
  const formattedData = { ...data };
  const { address, emergencyDetails } = formattedData;
  formattedData.id = newId;
  formattedData.password = bcrypt.hashSync(formattedData.password, 10);
  try {
    await db.owner.create({
      data: {
        ...formattedData,
        address: {
          create: {
            addressLine: address?.addressLine as string,
            city: address?.city as string,
            pincode: address?.pincode as number,
            state: address?.state as string,
            electricityBill: address?.electricityBill,
            propertyTaxBill: address?.propertyTaxBill,
          },
        },
        emergencyDetails: {
          create: {
            phone1: emergencyDetails?.phone1 as string,
            email: emergencyDetails?.email as string,
            firstName: emergencyDetails?.firstName as string,
            lastName: emergencyDetails?.lastName as string,
            relation: emergencyDetails?.relation as string,
          },
        },
      },
    });
    return {
      status: 201,
      message: creationSuccessMessage({
        email: formattedData.email,
        userType: formattedData.userType,
      }),
    };
  } catch (e) {
    return prismaErrorHandler(e as Error);
  }
};
