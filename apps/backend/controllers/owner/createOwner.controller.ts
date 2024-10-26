import { Request, Response } from "express";
import { generateId } from "../../utils/generateId";
import { db } from "../../utils/prismaClient";

export const createOwnerController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await db.owner.create({
      data: {
        id: generateId(),
        ...data,
      },
    });
  } catch (e) {}
};
