import { ADMIN_ENUM_VALUE } from "../constants/user.js";
import { productSchema } from "../validations/productValidation.js";
import Product from "../models/Product.js";

const addProduct = async (req, res) => {
  const { user, product } = req.body;

  await productSchema.validateAsync(product); //TODO add shared user validation

  if (user.role !== ADMIN_ENUM_VALUE) {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  const newProduct = new Product(product);
  const savedProduct = await newProduct.save();

  res
    .status(201)
    .json({
      status: 201,
      message: "Product added successfully",
      product: savedProduct,
    });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find().catch((e) => {
    res.status(500).json({ message: "Failed to fetch products" });
  });

  if (products) {
    res.status(200).json({ data: products });
  }
};

export { addProduct, getAllProducts };
