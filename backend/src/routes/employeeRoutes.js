import express from "express";
import {
  getEmployee,
  getEmployeeByNumber,  
  updateEmployeeValidators,
  newEmployeeValidators,
  updateEmployeeByNumber,
  addEmployee,
  deleteEmployeeByNumber,
} from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", getEmployee);

router.get("/:number", getEmployeeByNumber);

router.put("/update/:number", updateEmployeeValidators, updateEmployeeByNumber)

router.post("/add", newEmployeeValidators, addEmployee);

router.delete("/remove/:number", deleteEmployeeByNumber);

export default router;
