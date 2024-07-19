import express from "express";
import connectDB from "./DB/connect.db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mainRouter from '../routes/mainRouter.js';

const connectApp = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

const app = express();
const PORT =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_PORT
    : process.env.PORT;

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://186.19.99.110'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(mainRouter);

connectApp();
