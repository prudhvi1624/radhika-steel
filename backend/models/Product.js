import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String, // "/uploads/filename.jpg"
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
