import appRootPath from "app-root-path";
import { Blog } from "../../models/blog/index.mjs";
import sharp from "sharp";

export const AddBlogController = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({
        msg: "image is required",
      });
    }
    await sharp(req.files.img.data)
      .jpeg({ quality: 60 })
      .toFile(appRootPath.resolve(`/uploads/Blogs/${req.files.img.md5}.jpg`));
    await sharp(req.files.img2.data)
      .jpeg({ quality: 60 })
      .toFile(appRootPath.resolve(`/uploads/Blogs/${req.files.img2.md5}.jpg`));
    const blog = new Blog({
      ...req.body,
      img: `/uploads/Blogs/${req.files.img.md5}.jpg`,
      img2: `/uploads/Blogs/${req.files.img2.md5}.jpg`,
    });
    await blog.save();
    res.status(201).json({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(error);
  }
};

export const GetBlogsControler = async (req, res) => {
  try {
    const {
      pageNumber = 1,
      pageSize = 6,
      searchWord = "",
      category = '',
    } = req.query;
    const Blogs = await Blog.find({
      title: {
        $regex: searchWord,
      },
      category: category,
    })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    console.log(Blogs);
    res.status(200).json({ data: Blogs });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const GetBlogByIdControler = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({ data: blog });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const UpdateBlogController = async (req, res) => {
  try {
    const UpdatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ data: UpdatedBlog });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const DeleteBlogController = async (req, res) => {
  try {
    const params = req.params;
    const DeletedTodo = await Blog.findByIdAndDelete(params.id);
    res.status(200).json({ data: DeletedTodo });
  } catch (error) {
    res.status(404).json(error);
  }
};
