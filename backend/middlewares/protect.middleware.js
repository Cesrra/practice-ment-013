import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token || token === null) return res.status(401).json({ message: 'Unauthorized', status: 401 });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: 'Unauthorized / Invalid token', status: 401 });
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(400).json({ message: "user doesn't exist" });
    req.user = user;
    next();
  } catch (error) {
    return res.status(501).json({ err: 'Protect Middleware error | ' + error.message })

  }
}

export default protect;