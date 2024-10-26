import { Request, Response, Router } from "express";
import { createOwnerController } from "../../../controllers/owner/createOwner.controller";
import { validateOwnerData } from "../../../middlewares/validations/ownerData";

const router = Router();

router.get("/health-check", (_req: Request, res: Response) => {
  res.json({
    message: "Health Check success!",
    code: 200,
  });
});

// /v1/owner POST
router.post("/", validateOwnerData, createOwnerController);

export { router as ownerRouter };
