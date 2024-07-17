
import Conversation from './../models/conversation.model.js';
import Message from './../models/message.model.js';

const sendMessage = async (req, res) => {

  const { message } = req.body;
  const { receiverId } = req.params;
  const senderId = req.user._id;
  let conversation;

  if (!message || !senderId || !receiverId) return res.status(400).json({ error: 'receiverId, senderId and message are required' })

  try {
    conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    };

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await Promise.all([conversation.save(), newMessage.save()])
    } else {
      return res.status(401).json({ error: "Can't retrieve new message content" });
    };

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(501).json({ err: "send message err |" + error.message });
  };
};

const getMessages = async (req, res) => {

  const { peerId } = req.params;
  const senderId = req.user._id;
  if (!peerId || !senderId) return res.status(401).json({ error: "Can't retrieve peer or send ID" });

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, peerId] }
    }).populate("messages");
    const messages = conversation ? conversation.messages : [];
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ "message": "Err Controller sendMessage | " + error.message })
  }

};


export { sendMessage, getMessages }