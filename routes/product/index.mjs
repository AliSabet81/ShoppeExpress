import { Router } from "express";
import { validatiosMiddleware } from "../../middleware/index.mjs";
import {
  AddProductController,
  DeleteProductController,
  GetProductByIdControler,
  GetProductsControler,
  UpdateProductController,
} from "../../controller/index.mjs";
import { AddProductSchema } from "../../models/product/index.mjs";
export const ProductRoutes = Router();

ProductRoutes.post(
  "/add",
  validatiosMiddleware(AddProductSchema),
  AddProductController
);
ProductRoutes.get("/", GetProductsControler);
ProductRoutes.get("/:id", GetProductByIdControler);
ProductRoutes.put("/update/:id", UpdateProductController);
ProductRoutes.delete("/delete/:id", DeleteProductController);