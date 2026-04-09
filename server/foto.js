import mongoose from "mongoose";
import dotenv from "dotenv";
import Image from "./models/image.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error(err));

// Sample image data
const sampleImages = [
  { name: "hero-banner-2026.jpg", url: "/images/hero-banner-2026.jpg", type: "hero" },
  { name: "about-us-photo.png", url: "/images/about-us-photo.png", type: "about" },
  { name: "airduct-cleaning.jpg", url: "/images/airduct-cleaning.jpg", type: "airduct" },
  { name: "dryer-installation.jpeg", url: "/images/dryer-installation.jpeg", type: "dryer" },
  { name: "ac-maintenance.png", url: "/images/ac-maintenance.png", type: "ac" },
  { name: "chimney-repair.jpg", url: "/images/chimney-repair.jpg", type: "chimney" },
];

// Function to insert sample images
async function seedImages() {
  try {
    await Image.deleteMany({}); // optional: clear old data
    const inserted = await Image.insertMany(sampleImages);
    console.log(`Inserted ${inserted.length} images successfully!`);
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

seedImages();