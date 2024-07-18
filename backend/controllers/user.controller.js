import User from "../models/user.model.js";

const getOtherUsers = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const peers = await User.find({ _id: { $ne: currentUserId } });
    return res.status(200).json(peers);
  } catch (error) {
    return res.status(501).json({ "error": 'user-controller | ' + error.message });
  };
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(501).json({ 'error': 'user-controller | ' + error.message })
  };
}


export { getOtherUsers, getAllUsers }