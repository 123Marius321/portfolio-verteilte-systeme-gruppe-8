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

router.put("/:number", updateEmployeeValidators, updateEmployeeByNumber)

router.post("/", newEmployeeValidators, addEmployee);

router.delete("/:number", deleteEmployeeByNumber);

export default router;
