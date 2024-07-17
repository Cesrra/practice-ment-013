import express from 'express'
import connectDB from './DB/connect.db.js';
import middlewares from './middlewares/app.middleware.js';

const connectApp = async () => {

  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
  } catch (error) {
    console.log(error.message);
  }
}


const app = express();
app.use(middlewares);

const { PROD_PORT, DEV_PORT, NODE_ENV } = process.env;
const PORT = NODE_ENV === 'production' ? PROD_PORT : DEV_PORT;

connectApp();




