import { Request, Response } from "express";
import { PrismaOwnerData } from "../../interfaces/owner";
import { createOwner } from "../../repository/createOwner.repo";

export const createOwnerController = async (req: Request, res: Response) => {
  const data: PrismaOwnerData = req.body;
  const ownerRepo = await createOwner(data);
  res.status(ownerRepo.status).json(ownerRepo);
};
