import auth from "./auth.routes.js";
import landing from "./landing.routes.js";
import message from "./message.routes.js";
import user from "./user.routes.js";
import profile from "./profile.routes.js";

import { Router } from "express";

const mainRouter = Router();

mainRouter.use("/", landing);
mainRouter.use("/auth", auth);
mainRouter.use("/messages", message);
mainRouter.use("/users", user);
mainRouter.use("/profile", profile);
mainRouter.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    status: 404,
    error: "Invalid endpoint",
  });
});

export default mainRouter;
