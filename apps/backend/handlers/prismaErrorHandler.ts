import { Prisma } from "@prisma/client";
import { prismaErrorCodes } from "../constants/errorCodes";
import { errors } from "../constants/errors";

export const prismaErrorHandler = (e: Error) => {
  const { UNIQUE_CONSTRAINT, DB_REQUEST_TIMEOUT, DB_UNREACHABLE } =
    prismaErrorCodes;

  const {
    UNIQUE_CONTRAINT: UNIQUE_CONSTRAINT_MSG,
    SERVER_UNREACHABLE,
    REQUEST_TIMEOUT,
    INTERNAL_SERVER_ERROR,
    INITIALIZATION_ERROR,
    DATA_VALIDATION_ERROR,
  } = errors;

  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    switch (e.code) {
      case UNIQUE_CONSTRAINT:
        return {
          status: 400,
          error: UNIQUE_CONSTRAINT_MSG,
          message: e.message,
        };
      case DB_UNREACHABLE:
        return {
          status: 503,
          error: SERVER_UNREACHABLE,
          message: e.message,
        };
      case DB_REQUEST_TIMEOUT:
        return {
          status: 408,
          error: REQUEST_TIMEOUT,
          message: e.message,
        };
      default:
        return {
          status: 500,
          error: INTERNAL_SERVER_ERROR,
          message: e.message,
        };
    }
  }
  if (e instanceof Prisma.PrismaClientValidationError) {
    return {
      status: 400,
      error: DATA_VALIDATION_ERROR,
      message: e.message,
    };
  }
  if (e instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 500,
      error: INITIALIZATION_ERROR,
      message: e.message,
    };
  }
  return {
    status: 500,
    error: INTERNAL_SERVER_ERROR,
    message: e.message,
  };
};
