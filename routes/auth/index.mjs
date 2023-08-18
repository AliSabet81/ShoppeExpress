import { Router } from "express";
import { LoginSchema, RegisterSchema } from "../../models/auth/index.mjs";
import {
  UserValidation,
  validatiosMiddleware,
} from "../../middleware/index.mjs";
import {
  LoginUserController,
  RegisterUserController,
} from "../../controller/index.mjs";
export const AuthRoutes = Router();

AuthRoutes.post(
  "/register",
  validatiosMiddleware(RegisterSchema),
  RegisterUserController
);
AuthRoutes.post(
  "/login",
  validatiosMiddleware(LoginSchema),
  LoginUserController
);
AuthRoutes.get("/UserValidate", UserValidation);
