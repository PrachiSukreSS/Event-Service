// 📁 server/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 MongoDB Connected");
  } catch (error) {
    console.error("🔴 Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

//module.exports = connectDB; // 👈 If you plan to use it elsewhere

export default connectDB;
