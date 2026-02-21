import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // HARD-CODED ADMIN CREDENTIALS
  if (email === "admin@radhikasteel.com" && password === "admin123") {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

export default router;
