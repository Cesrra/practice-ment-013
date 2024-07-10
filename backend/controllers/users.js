import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      email: req.body.email,
      password: hash,
    });
    const userResponse = {
      _id: newUser._id,
      email: newUser.email,
    };
    res.send(userResponse);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ message: "Username or password not found." });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(404)
        .send({ message: "Username or password not found." });
    }
    return res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
