import appRootPath from "app-root-path";
import { Product } from "../../models/product/index.mjs";
import sharp from "sharp";

export const AddProductController = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({
        msg: "image is required",
      });
    }
    await sharp(req.files.img.data)
      .jpeg({ quality: 60 })
      .toFile(appRootPath.resolve(`/uploads/products/${req.files.img.md5}.jpg`));
      const product = new Product({
        ...req.body,
        img: `/uploads/products/${req.files.img.md5}.jpg`
      })
      await product.save();
      res.status(201).json({
        msg:'success'
      })
  } catch (err) {
    console.log(err);
  }
};
