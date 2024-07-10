import express from 'express'
import connectDB from './DB/connect.db.js';

const connectApp = async () => {

  try {
    await connectDB();
    app.listen(PORT || 8080, () => {
      console.log(`Listening on port ${PORT}`);
    })
  } catch (error) {
    console.log(error.message);
  }
}


const app = express();
const { PORT } = process.env;



connectApp();




