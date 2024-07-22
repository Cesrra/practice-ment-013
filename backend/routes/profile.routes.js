import Router from "express";
import {
  getProfile,
  updateProfile,
} from "../controllers/profile.controller.js";
import protect from "../middlewares/protect.middleware.js";
import upload from "../config/multer.js";

const profile = Router();

profile.get("/", [protect], getProfile);
profile.patch("/", [protect], upload.single("avatar"), updateProfile);

export default profile;
