import mongoose from "mongoose";

const connectDB = async () => {
  const { CONN, cloud_db_conn } = process.env;

  try {
    await mongoose.connect(cloud_db_conn);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error.message)
  }
}

export default connectDB;