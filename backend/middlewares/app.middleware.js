import cookieParser from 'cookie-parser';
import express from 'express';
import mainRouter from '../routes/mainRouter.js';
import cors from 'cors';

const middlewares = [
  express.json(),
  cookieParser(),
  mainRouter,
  cors()

]

export default middlewares;