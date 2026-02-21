import express from "express";
import Blog from "../models/Blog.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE BLOG (admin)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { title, desc } = req.body;

    const blog = new Blog({
      title,
      desc,
      image: `/uploads/${req.file.filename}`,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET BLOGS (PUBLIC)
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

export default router;
