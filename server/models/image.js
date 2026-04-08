import mongoose from "mongoose";

const imageTypes = ["hero", "about", "airduct", "dryer", "ac", "chimney"];

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  url: { type: String, required: true },  
  type: { 
    type: String, 
    enum: imageTypes,                           
    required: true 
  },
}, { timestamps: true });                       

export default mongoose.model("Image", imageSchema);