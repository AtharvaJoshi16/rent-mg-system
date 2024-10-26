import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/health-check", (_req: Request, res: Response) => {
  res.json({
    message: "Health Check success!",
    code: 200,
  });
});

app.listen(process.env.PORT, () => {
  console.info(`backend: SUCCESSFUL ON PORT ${process.env.PORT}`);
});
