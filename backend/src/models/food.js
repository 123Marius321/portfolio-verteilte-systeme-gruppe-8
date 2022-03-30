import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    course: String,
});

export const Food = mongoose.model("Food", foodSchema);