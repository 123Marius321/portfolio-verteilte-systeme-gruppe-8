import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  number: Number,
  name: String,
  price: Number,
  course: String,
});

export const Food = mongoose.model("Food", foodSchema);
