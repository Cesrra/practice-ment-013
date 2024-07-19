import cookieParser from 'cookie-parser';
import express from 'express';
import mainRouter from '../routes/mainRouter.js';
import cors from 'cors';


const corsOptions = {
  origin: ['http://181.115.171.241:5173', 'https://chatapp-front-pxl9.onrender.com/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization'
};

const createCorsMiddleware = (options) => {
  return (req, res, next) => {
    res.header('Access-Control-Allow-Origin', options.origin.join(', '));
    res.header('Access-Control-Allow-Methods', options.methods);
    res.header('Access-Control-Allow-Headers', options.allowedHeaders);
    next();
  };
};


const middlewares = [
  createCorsMiddleware(corsOptions),
  cors(corsOptions),
  express.json(),
  cookieParser(),
  mainRouter
];

export default middlewares;