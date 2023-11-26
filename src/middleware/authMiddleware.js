import { verifyToken } from "../utils/jwtUtils.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed: Token is missing" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(403).json({ message: "Invalid token" });
    }

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { authMiddleware };
