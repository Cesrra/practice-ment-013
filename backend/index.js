import express from 'express'
import connectDB from './DB/connect.db.js';
import mainRouter from './routes/mainRouter.js'

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
const PORT = process.env.NODE_ENV === 'production' ? 8080 : process.env.PORT;
app.use(express.json())
app.use(mainRouter)



connectApp();




