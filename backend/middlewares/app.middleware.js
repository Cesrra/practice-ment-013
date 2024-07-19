import cookieParser from 'cookie-parser';
import express from 'express';
import mainRouter from '../routes/mainRouter.js';
import cors from 'cors';


const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://181.115.171.241:5173'],
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