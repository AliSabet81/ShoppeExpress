import { Router } from "express";
import { UserValidation } from "../../middleware/index.mjs";
import {
    DeleteUserController,
  GetUsersControler,
  UserInformationControler,
} from "../../controller/user/index.mjs";
export const UserRoutes = Router();

UserRoutes.get("/UserInfo", UserValidation, UserInformationControler);
UserRoutes.get("/", GetUsersControler);
UserRoutes.delete("/delete/:id", DeleteUserController);