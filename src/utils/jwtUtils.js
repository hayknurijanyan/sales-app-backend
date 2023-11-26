import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
  try {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return token;
  } catch (error) {
    console.error("Token generation error:", error.message);
    return null;
  }
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Token verification error:", error.message);
    return null;
  }
};

export { generateToken, verifyToken };
