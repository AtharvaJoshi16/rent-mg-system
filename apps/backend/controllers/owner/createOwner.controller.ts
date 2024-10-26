import { Request, Response } from "express";

export const createOwnerController = (req: Request, res: Response) => {
  res.json({
    message: "Hello",
  });
};
