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

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(mainRouter);

connectApp();
