import { Router } from "express";
import {
  AddBlogController,
  DeleteBlogController,
  GetBlogByIdControler,
  GetBlogsControler,
  UpdateBlogController,
} from "../../controller/blog/index.mjs";
import { validatiosMiddleware } from "../../middleware/index.mjs";
import { AddBlogSchema } from "../../models/blog/index.mjs";

export const BlogRoutes = Router();

BlogRoutes.post("/add", validatiosMiddleware(AddBlogSchema), AddBlogController);
BlogRoutes.get("/", GetBlogsControler);
BlogRoutes.get("/:id", GetBlogByIdControler);
BlogRoutes.put("/update/:id", UpdateBlogController);
BlogRoutes.delete("/delete/:id", DeleteBlogController);
