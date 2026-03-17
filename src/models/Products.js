// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    image: { type: String, required: true },
    rating: { type: Number, default: 5 },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    isTrending: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },
    isSale: { type: Boolean, default: false }
  },
  { 
    timestamps: true
  }
);

const Product = mongoose.models.Products || mongoose.model("Products", ProductSchema, "Products");

export default Product;