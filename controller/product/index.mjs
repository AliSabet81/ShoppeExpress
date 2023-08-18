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
      .toFile(
        appRootPath.resolve(`/uploads/products/${req.files.img.md5}.jpg`)
      );
    const product = new Product({
      ...req.body,
      img: `/uploads/products/${req.files.img.md5}.jpg`,
    });
    await product.save();
    res.status(201).json({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetProductsControler = async (req, res) => {
  try {
    const { pageNumber = 1, pageSize = 6 , searchWord=""} = req.query;
    const products = await Product.find({
      name: {
        $regex: searchWord,
      },
    })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    console.log(products);
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
export const GetProductByIdControler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const UpdateProductController = async (req, res) => {
  try {
    const UpdatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ data: UpdatedProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const DeleteProductController = async (req, res) => {
  try {
    const params = req.params;
    const DeletedTodo = await Product.findByIdAndDelete(params.id);
    res.status(200).json({ data: DeletedTodo });
  } catch (error) {
    res.status(404).json(error);
  }
};
