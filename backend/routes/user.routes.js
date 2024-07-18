import { Router } from "express";
import protect from '../middlewares/protect.middleware.js';
import { getOtherUsers } from "../controllers/user.controller.js";

const user = Router();

user.get('/peers', [protect], getOtherUsers);


export default user;