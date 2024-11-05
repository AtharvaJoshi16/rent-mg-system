import { Hono } from "hono";
import { validateOwnerData } from "../../middlewares/ownerData";
import { createOwnerController } from "../controllers/owner/createOwner.controller";

const ownerRouter = new Hono();

ownerRouter.post("/", validateOwnerData, createOwnerController);

export { ownerRouter };
