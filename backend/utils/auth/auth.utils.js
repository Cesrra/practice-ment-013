import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { SALT_ROUNDS, JWT_SECRET, NODE_ENV } = process.env;

const getHashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(+SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Error during hashing password: " + error.message)
  }
}

const generateTokenizedCookie = (userId, res) => {

  try {
    const token = jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: '15d'
    });

    res.cookie('jwt', token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      secure: NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'strict'
    })
  } catch (error) {
    return res.status(500).json({ 'token_error': error.message })
  }

}

const isValidPassword = async (plainPass, hashedPass) => {
  return await bcrypt.compare(plainPass, hashedPass);
}





export { getHashedPassword, generateTokenizedCookie, isValidPassword }






