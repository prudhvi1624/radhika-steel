import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // ⚠️ delete old admin first (important)
    await Admin.deleteMany({});

    const admin = new Admin({
      email: "admin@radhikasteel.com",
      password: "admin123"
    });

    await admin.save();
    console.log("✅ Admin created successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();
