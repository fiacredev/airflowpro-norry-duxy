import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: { type: String, default: "Unread" }, // Unread / Read
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);