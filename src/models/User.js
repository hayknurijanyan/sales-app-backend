import mongoose from "mongoose";
import { ADMIN_ENUM_VALUE, EMPLOYEE_ENUM_VALUE } from "../constants/user.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [ADMIN_ENUM_VALUE, EMPLOYEE_ENUM_VALUE],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
