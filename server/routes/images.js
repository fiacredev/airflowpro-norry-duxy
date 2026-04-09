import express from "express";
import Image from "../models/image.js"; // adjust path as needed

const router = express.Router();

router.post("/upload-image", async (req, res) => {
  try {
    const { name, url, type } = req.body;

    // Validate input
    if (!name || !url || !type) {
      return res.status(400).json({ message: "Name, URL, and type are required" });
    }

    // Check that type is valid
    const imageTypes = ["hero", "about", "airduct", "dryer", "ac", "chimney"];
    if (!imageTypes.includes(type)) {
      return res.status(400).json({ message: `Invalid type. Must be one of: ${imageTypes.join(", ")}` });
    }

    // Check if an image with the same name and type already exists
    let image = await Image.findOne({ name, type });
    if (image) {
      // Update existing image URL
      image.url = url;
      image = await image.save();
    } else {
      image = await Image.create({ name, url, type });
    }

    res.json({
      message: "Image saved successfully",
      image,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/", async (req, res) => {
  try {
    const { type } = req.query;

    let filter = {};

    if (type) {
      const imageTypes = ["hero", "about", "airduct", "dryer", "ac", "chimney"];

      if (!imageTypes.includes(type)) {
        return res.status(400).json({
          message: `Invalid type. Must be one of: ${imageTypes.join(", ")}`,
        });
      }

      filter.type = type;
    }

    const images = await Image.find(filter).sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

});


export default router;