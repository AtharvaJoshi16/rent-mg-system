import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { ownerRouter } from "./routes/v1/owner";
const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/v1/owner/", ownerRouter);
app.listen(process.env.PORT, () => {
  console.info(`backend: SUCCESSFUL ON PORT ${process.env.PORT}`);
});
