// import express from "express"
// import Service from "../models/Service.js"; 
// import Image from "../models/image.js";

// const router = express.Router();

// router.get("/merged-services", async (req, res) => {
//   try {

//     const services = await Service.find();
//     const images = await Image.find().sort({ createdAt: -1 });
//     const imageMap = Object.fromEntries(images.map(img => [img.type, img.url]));

//     const serviceImageTypeMap = {
//       "Dryer Vent Cleaning": "dryer",
//       "AC Cleaning": "ac",
//       "Chimney Sweeping": "chimney",
//       "Air Duct Cleaning": "airduct",
//       "Hero Section": "hero",
//       "About Section": "about",
//     };

//     const merged = services.map(service => ({
//       ...service.toObject(), // convert Mongoose doc to plain object
//       image: imageMap[serviceImageTypeMap[service.name]] || null,
//     }));

//     res.json(merged);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;