import mongoose, { Schema } from "mongoose";
import * as yup from "yup";

export const AddBlogSchema = yup.object({
  body: yup.object({
    title: yup.string(),
    category: yup.string(),
    author: yup.string(),
    date: yup.string(),
    desc: yup.string(),
    description: yup.string(),
  }),
});

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  img2: {
    type: String,
  },
});

export const Blog = mongoose.model("Blog", BlogSchema);
