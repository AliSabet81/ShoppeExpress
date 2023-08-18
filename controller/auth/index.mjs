import bcrypt from "bcrypt";
import { User } from "../../models/auth/index.mjs";
import jwt from "jsonwebtoken";

export const RegisterUserController = async (req, res) => {
  const isUser = await User.findOne({ email: req.body.email });
  if (isUser) {
    return res.status(400).json({
      msg: "username with this email alredy exists!",
    });
  }

  try {
    const hashSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, hashSalt);
    const user = await new User({ ...req.body, password: hashed });
    await user.save();
    res.status(201).json({
      user,
      msg: "user created successfully",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const LoginUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      msg: "email or password is wrong!",
    });
  }
  const passwordValidation = bcrypt.compare(password, user.password);
  if (!passwordValidation) {
    return res.status(400).json({
      msg: "email or password is wrong!",
    });
  }
  const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
  res.status(200).json({
    token,
  });
};

