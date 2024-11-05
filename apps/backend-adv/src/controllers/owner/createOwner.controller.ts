import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import { createOwner } from "../../repositories/createOwner.repo";

export const createOwnerController = async (c: Context) => {
  const data = await c.req.json();
  const createOwnerResponse = await createOwner(data);
  return c.json(
    {
      ...(createOwnerResponse?.error
        ? {
            error: createOwnerResponse?.error,
          }
        : {
            message: createOwnerResponse?.message,
          }),
    },
    createOwnerResponse.status as StatusCode
  );
};
