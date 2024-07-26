import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const getProfile = async (req, res) => {
  try {
    const user = await req.user;
    if (!user) return res.status(404).json({ message: "user doesn't exist" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.code || 500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await req.user;
    let avatarUrl = user.avatar;
    const { name, phone, email, password } = req.body;

    if (email || password) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res
        .status(400)
        .json({ message: "email and password cannot be updated" });
    }

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        avatarUrl = result.secure_url;
      } catch (error) {
        return res
          .status(error.http_code || 500)
          .json({ message: error.message });
      } finally {
        fs.unlinkSync(req.file.path);
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { name, avatar: avatarUrl, phone },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(error.code || 500).json({ message: error.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const user = await req.user;
    await User.findByIdAndDelete(user._id);
    return res
      .status(200)
      .json({ message: `${user.name} deleted successfully` });
  } catch (error) {
    return res.status(error.code || 500).json({ message: error.message });
  }
};

export { getProfile, updateProfile, deleteProfile };
