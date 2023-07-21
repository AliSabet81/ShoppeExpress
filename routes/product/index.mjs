import { Router } from "express";
import { LoginSchema, RegisterSchema, User } from "../../models/auth/index.mjs";
import { validatiosMiddleware } from "../../middleware/index.mjs";
import { AddProductController, LoginUserController, RegisterUserController } from "../../controller/index.mjs";
import { AddProductSchema } from "../../models/product/index.mjs";
export const ProductRoutes = Router();

ProductRoutes.post('/add',validatiosMiddleware(AddProductSchema), AddProductController)