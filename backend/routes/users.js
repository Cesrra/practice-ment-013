import express from "express";
import { createUser, login } from "../controllers/users.js";

const routerUser = express.Router();
routerUser.post("/register", createUser);
routerUser.post("/login", login);

export default routerUser;
