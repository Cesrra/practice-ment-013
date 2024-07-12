import mongoose from "mongoose";

const connectDB = async () => {
  const { CONN } = process.env;

  try {
    await mongoose.connect(CONN);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error.message)
  }
}

export default connectDB;