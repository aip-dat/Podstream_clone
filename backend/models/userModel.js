import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      require: true,
    },
    username: {
      type: "string",
      require: true,
      unique: true,
    },
    password: {
      type: "string",
      require: true,
      minlength: 6,
    },
    gender: {
      type: "string",
      require: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: "string",
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
