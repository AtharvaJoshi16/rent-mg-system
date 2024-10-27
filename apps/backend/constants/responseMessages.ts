import { UserType } from "@prisma/client";

export const responses = {};

export const creationSuccessMessage = (data: {
  email: string;
  userType: UserType;
}) => {
  return `User created with type ${data.userType}. Email verification link sent to ${data.email}`;
};
