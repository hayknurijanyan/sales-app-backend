import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/jwtUtils.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = generateToken({
    id: user._id,
    username: user.username,
  });
  res.status(200).json({
    status: 201,
    message: "Login successful",
    token,
    user: { username: user.username, role: user.role },
  });
};

const createUser = async (req, res) => {
  const { username, password, role } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    role,
  });

  await newUser.save();

  res.status(201).json({
    status: 201,
    message: "Registration successful",
    user: { username, role },
  });
};

export { loginUser, createUser };
