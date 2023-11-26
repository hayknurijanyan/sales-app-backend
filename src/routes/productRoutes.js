import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../controllers/productController.js";
import errorHandler from "../utils/errorHandler.js";

const router = express.Router();
router.post("/products", errorHandler(addProduct));
router.get("/products", errorHandler(getAllProducts));

export default router;
