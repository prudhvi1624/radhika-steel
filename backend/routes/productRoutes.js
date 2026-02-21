import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/* CREATE PRODUCT */
router.post("/", auth, upload.single("image"), async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: `/uploads/${req.file.filename}`,
  });
  await product.save();
  res.status(201).json(product);
});

/* GET PRODUCTS */
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* UPDATE PRODUCT */
/* UPDATE PRODUCT */
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* DELETE PRODUCT */
router.delete("/:id", auth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
