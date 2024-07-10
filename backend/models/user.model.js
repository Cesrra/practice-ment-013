import mongoose from "mongoose";
const { Schema } = mongoose;


const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is requied"],
    minlength: [4, "Username must be at least 4 characters"],
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && val.lenngth > 10;
      },
      message: "email must exceed 9 characters and has email format"
    }
  },

  avatar: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(?=.*[A-Z])(?=.*\d).{10,}$/.test(v); // 
      },
      message: 'Password must contain at least one uppercase letter, one number, and be at least 8 characters long!'
    }
  }
}, {
  timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User;