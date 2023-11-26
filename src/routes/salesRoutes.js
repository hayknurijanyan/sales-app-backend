import express from "express";
import {
  getSoldProducts,
  sellProducts,
} from "../controllers/salesController.js";
import errorHandler from "../utils/errorHandler.js";

const router = express.Router();

router.post("/sell-products", errorHandler(sellProducts));
router.get("/sold-products", errorHandler(getSoldProducts));

export default router;
