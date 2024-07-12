import auth from './auth.routes.js';
import landing from './landing.routes.js';

import { Router } from 'express';

const mainRouter = Router();

mainRouter.use('/', landing)
mainRouter.use('/auth', auth)
mainRouter.all('*', (req, res) => {
  res.status(404).json({
    sucess: false,
    status: 404,
    error: 'Invalid endpoint'
  })
})

export default mainRouter


