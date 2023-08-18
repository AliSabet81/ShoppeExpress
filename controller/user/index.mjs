import { User } from "../../models/auth/index.mjs";
import jwt from "jsonwebtoken";

export const UserInformationControler = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const validate = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.status(200).json(validate.user);
  } catch (error) {
    res.status(400).json(error)
  }
};

export const GetUsersControler = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const DeleteUserController = async (req, res) => {
  try {
    const params = req.params;
    const DeletedTodo = await User.findByIdAndDelete(params.id);
    res.status(200).json({ data: DeletedTodo });
  } catch (error) {
    res.status(404).json(error);
  }
};