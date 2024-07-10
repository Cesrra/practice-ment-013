import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is requied"],
      minlength: [4, "Username must be at least 4 characters"],
      unique: true,
      default: "user",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (val) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) && val.length > 9;
        },
        message: "email must exceed 9 characters and has email format",
      },
    },

    avatar: {
      type: String,
      required: true,
      default: "add image",
      // default: '/assets/avatar.jpg'   cuando haya una imagen para usar
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      default: "add phone",
    },
    password: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(?=.*[A-Z])(?=.*\d).{10,}$/.test(v); //
        },
        message:
          "Password must contain at least one uppercase letter, one number, and be at least 8 characters long!",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
