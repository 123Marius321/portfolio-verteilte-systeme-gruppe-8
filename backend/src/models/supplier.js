import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    number: Number,
    companyName: String,
    delivery: Array,
    deliveryDay: String
});

export const Supplier = mongoose.model("Supplier", supplierSchema);