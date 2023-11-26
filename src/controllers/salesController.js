import Sales from "../models/Sales.js";
import { salesSchema } from "../validations/salesValidation.js";

const sellProducts = async (req, res) => {
  const { username, totalPrice, products, date } = req.body;

  await salesSchema.validateAsync(req.body);

  const newSales = new Sales({
    username,
    totalPrice,
    products,
    date,
  });

  const savedSales = await newSales.save();

  res.status(201).json({
    status: 201,
    message: "Sale added successfully",
    data: savedSales,
  });
};

const getSoldProducts = async (req, res) => {
  try {
    const sales = await Sales.find().populate("products", "productName");

    if (sales) {
      const modifiedSales = sales.map((sale) => ({
        _id: sale._id,
        username: sale.username,
        totalPrice: sale.totalPrice,
        date: sale.date,
        products: sale.products.map((product) => product.productName),
      }));

      res.status(200).json({
        data: modifiedSales,
      });
    } else {
      res.status(404).json({ message: "No sold products found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sold products" });
  }
};

export { sellProducts, getSoldProducts };
