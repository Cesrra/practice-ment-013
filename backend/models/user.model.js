import mongoose from "mongoose";
const { Schema } = mongoose;


const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is requied"],
    minlength: [4, "Username must be at least 4 characters"],
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    sparse: true
  },
  phone: {
    type: String,
    sparse: true
  }
}, {
  timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User;