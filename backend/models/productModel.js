const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderId: {
      type: String,
      required: [true, "Please add a orderId"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Please add a company"],
      trim: true,
    },
    sku: {
      type: String,
      required: [true, "Please add a Item Code"],
      trim: true,
    },

    quality: {
      type: Number,
      required: [true, "Please add a quality"],
      trim: true,
    },
    damaged: {
      type: Number,
      required: [true, "Please add a damaged"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
