import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Sales = mongoose.model("Sales", SalesSchema);

export default Sales;
