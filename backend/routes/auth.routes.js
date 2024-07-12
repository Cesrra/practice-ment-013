import { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controller.js'


const auth = Router();


// Register
auth.post('/register', register)

// Login
auth.post('/login', login)

// LogOut
auth.post('/logout', logout)


export default auth;
