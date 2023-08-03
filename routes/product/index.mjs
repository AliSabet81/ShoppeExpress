import { Router } from "express";
import { LoginSchema, RegisterSchema, User } from "../../models/auth/index.mjs";
import { UserValidation, validatiosMiddleware } from "../../middleware/index.mjs";
import { AddProductController, GetProductByIdControler, GetProductsControler, LoginUserController, RegisterUserController, UpdateProductController } from "../../controller/index.mjs";
import { AddProductSchema } from "../../models/product/index.mjs";
export const ProductRoutes = Router();

ProductRoutes.post('/add',validatiosMiddleware(AddProductSchema), AddProductController)
ProductRoutes.get("/",GetProductsControler)
ProductRoutes.get("/:id",GetProductByIdControler)
ProductRoutes.put("/update/:id", UpdateProductController);
