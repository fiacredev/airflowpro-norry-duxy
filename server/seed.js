import mongoose from "mongoose";
import dotenv from "dotenv";
import Service from "./models/Service.js";
import Promotion from "./models/Promotion.js";
import User from "./models/User.js";
import Message from "./models/Message.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error(err));

const seedServices = [
  { name: "Air Duct Cleaning", description: "Full air duct cleaning", price: 120, status: "Active" },
  { name: "Dryer Vent Cleaning", description: "Professional dryer vent cleaning", price: 80, status: "Active" },
  { name: "AC Cleaning", description: "Wall-mounted AC deep cleaning", price: 60, status: "Active" },
  { name: "Chimney Sweeping", description: "Safe chimney cleaning", price: 100, status: "Active" },
];

const seedPromotions = [
  { title: "Spring Special", description: "10% off AC cleaning", discount: "10%", active: true },
  { title: "New Customer Deal", description: "5% off first service", discount: "5%", active: true },
];

// const seedUsers = [
//   { name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin" },
//   { name: "Regular User", email: "user@example.com", password: "user123", role: "user" },
// ];

const seedMessages = [
  { name: "John Doe", email: "john@example.com", subject: "AC Cleaning Inquiry", message: "How much for AC cleaning?", status: "Unread" },
  { name: "Jane Smith", email: "jane@example.com", subject: "Chimney Sweeping", message: "Do you sweep chimneys on weekends?", status: "Unread" },
];

const seedDB = async () => {
  try {
    // Clear existing data
    await Service.deleteMany({});
    await Promotion.deleteMany({});
    // await User.deleteMany({});
    await Message.deleteMany({});

    // Insert seed data
    await Service.insertMany(seedServices);
    await Promotion.insertMany(seedPromotions);
    // await User.insertMany(seedUsers);
    await Message.insertMany(seedMessages);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding error:", err);
  }
};

seedDB();