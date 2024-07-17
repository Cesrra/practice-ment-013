import { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import protect from '../middlewares/protect.middleware.js';

const message = Router();

message.post('/send/:receiverId', [protect], sendMessage);
message.get('/chat-history/:peerId', [protect], getMessages);


export default message;