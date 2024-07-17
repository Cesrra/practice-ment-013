import cookieParser from 'cookie-parser';
import express from 'express';
import mainRouter from '../routes/mainRouter.js';

const middlewares = [
  express.json(),
  cookieParser(),
  mainRouter

]

export default middlewares;