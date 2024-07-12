import { Router } from 'express';
import { register, login, logout, getProfile } from '../controllers/auth.controller.js'
import protect from '../middlewares/protect.middleware.js'


const auth = Router();


// Register
auth.post('/register', register)

// Login
auth.post('/login', login)

// LogOut
auth.post('/logout', logout)

// User profile
auth.get('/profile', [protect], getProfile)


export default auth;
