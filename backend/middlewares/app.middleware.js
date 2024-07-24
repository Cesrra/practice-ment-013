import cookieParser from 'cookie-parser';
import express from 'express';
import mainRouter from '../routes/mainRouter.js';
import cors from 'cors';


const corsOptions = {
  origin: 'https://chatapp-front-pxl9.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization'
};



const middlewares = [
  cors(corsOptions),
  express.json(),
  cookieParser(),
  mainRouter
];

export default middlewares;