import { Router } from 'express';

const landing = Router();

landing.get('/', (req, res) => {
  return res.status(200).json({ success: 'api is up and running' })
})

export default landing;