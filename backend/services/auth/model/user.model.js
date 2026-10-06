import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firebaseUID: {
      type: String,
      unique: true,
    },
    name: String,
    email: String,
    avatar: String,
    plan: {
      type: String,
      default: "free plan",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
