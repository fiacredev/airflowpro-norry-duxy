import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  },
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);