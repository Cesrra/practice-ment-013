import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = authorization.replace("Bearer ", "");
  const secret = process.env.JWT_SECRET;
  let payload;
  try {
    payload = jwt.verify(token, secret);
    console.log(payload);
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  req.user = payload;
  next();
};

export default auth;
