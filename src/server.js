import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import "dotenv/config";
import productRoutes from "./routes/productRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";

const uri = process.env.DB_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/api", salesRoutes, productRoutes);

mongoose.connect(uri);
mongoose.connection.on("error", (err) => logError(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
