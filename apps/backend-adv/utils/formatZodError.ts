import { ZodError } from "zod";

export const formatZodError = (e: ZodError) => {
  console.log(e);
  return e.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
    path: err.path,
  }));
};
