import mongoose, { Schema } from "mongoose";
import * as yup from "yup";

export const AddProductSchema = yup.object({
  body: yup.object({
    name: yup.string(),
    price: yup.number(),
    category: yup.string(),
    weight: yup.string(),
    dimentions: yup.string(),
    colors: yup.string(),
    material: yup.string(),
    count: yup.number(),
    description: yup.string(),
  }),
});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  dimentions: {
    type: String,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  img:String
});

export const Product = mongoose.model("Product", ProductSchema);
