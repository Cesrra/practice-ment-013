import User from "../models/user.model.js";
import { getHashedPassword, getTokenizedCookie, isValidPassword } from "../utils/auth/auth.utils.js";


// Register
const register = async (req, res) => {

  try {
    const { name, email, password, confirmedPassword } = req.body;
    if (!name || !password || !confirmedPassword || !email) return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Missing required field"
    });

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 8)) return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Email must match the required format"
    });

    if (!(/^(?=.*[A-Z])(?=.*\d).{10,}$/.test(password))) return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Password must match the required format"
    });

    if (password !== confirmedPassword) return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Password and confirmed password do not match."
    });


    const user = await User.findOne({ email });
    if (user) return res.status(409).json({
      status: 409,
      error: "Conflict",
      message: "User already exists."
    });

    const defaultAvatar = 'https://avatar.iran.liara.run/public/49';
    const hashedPassword = await getHashedPassword(password);
    const newUser = new User({
      name,
      password: hashedPassword,
      email,
      avatar: defaultAvatar
    });

    newUser && getTokenizedCookie(newUser._id, res);
    await newUser.save();

    return res.status(201).json({ success: `${name} has been successfully registered` });
  } catch (error) {
    return res.status(500).json({ err: 'server error ' + error.message });
  }

}

// Login
const login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({
    status: 400,
    error: 'Bad Request',
    message: 'Missing required field'
  })

  try {
    const user = await User.findOne({ email });
    if (!user || !(await isValidPassword(password, user?.password))) return res.status(401).json({
      status: 401,
      error: 'Unauthorized',
      message: 'Invalid email or password'
    });

    getTokenizedCookie(user._id, res);
    return res.status(200).json({ success: `${user.name} logged in!` })

  } catch (error) {
    return res.status(500).json({ 'Internal Login Error: ': error.message })
  }
}

// Get Profile
const getProfile = async (req, res) => {
  try {
    const user = await req.user;
    if (!user) return res.status(404).json({ error: "user doesn't exist" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.code || 500).json({ err: error.message })
  }
}

// Logout
const logout = async (req, res) => {

  try {
    res.cookie('jwt', '',
      {
        maxAge: 0,
        expiresIn: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      });
    return res.status(200).json({ message: 'Successfully Logged Out' })
  } catch (error) {
    return res.status(501).json({ 'logout internal err': error.message });
  }
}



export { register, login, logout, getProfile }