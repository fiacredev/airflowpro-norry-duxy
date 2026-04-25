import express from "express";
import Service from "../models/Service.js"; 
import Promotions from "../models/Promotion.js"
import Image from "../models/image.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.get("/promotions", async (req, res) => {
  const promotions = await Promotions.find();
  res.json(promotions);
});


router.get("/merged-services", async (req, res) => {
  try {
    const services = await Service.find();
    const images = await Image.find();

    const imageMap = Object.fromEntries(images.map(img => [img.type.toLowerCase(), img.url]));

    const getImageTypeFromService = (name) => {
      const normalized = name.toLowerCase().replace(/\s/g, "");
      if (normalized.includes("sécheuse")) return "dryer";
      if (normalized.includes("Climatiseur")) return "ac";
      if (normalized.includes("cheminée")) return "chimney";
      if (normalized.includes("ventilation")) return "airduct";
      return null;
    };

    const merged = services.map(service => {
      const type = getImageTypeFromService(service.name);
      return {
        ...service.toObject(),
        image: type ? imageMap[type] : null
      };
    });

    res.json(merged);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        price: String(req.body.price),
      },
      { new: true }
    );

    res.json(updatedService);
  } catch (error) {
    console.error("UPDATE ERROR:", error); 
    res.status(500).json({ error: error.message });
  }
});

router.post("/promotions", async (req, res) => {
  try {
    const { title, description, discount, expiresAt, active } = req.body;
    if (!title || !description || !discount) {
      return res.status(400).json({ message: "Title, description, and discount are required." });
    }
    const newPromotion = new Promotions({
      title,
      description,
      discount,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
      active: active !== undefined ? active : true, // default true if not provided
    });

    const savedPromotion = await newPromotion.save();
    res.status(201).json(savedPromotion);
  } catch (error) {
    console.error("Error creating promotion:", error);
    res.status(500).json({ message: "Server error" });
  }
});



export default router;