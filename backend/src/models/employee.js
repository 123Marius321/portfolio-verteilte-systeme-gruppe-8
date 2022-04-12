import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  number: Number,
  firstname: String,
  lastname: String,
  job: String,
  salary: Number,
});

export const Employee = mongoose.model("Employee", employeeSchema);
