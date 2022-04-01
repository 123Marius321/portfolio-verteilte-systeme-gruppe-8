import express from "express";
import {
  getSupplier,
  getSupplierByNumber,  
  updateSupplierValidators,
  newSupplierValidators,
  updateSupplierByNumber,
  addSupplier,
  deleteSupplierByNumber,
} from "../controllers/supplierControllers.js";

const router = express.Router();

router.get("/", getSupplier);

router.get("/:number", getSupplierByNumber);

router.put("/update/:number", updateSupplierValidators, updateSupplierByNumber)

router.post("/add", newSupplierValidators, addSupplier);

router.delete("/remove/:number", deleteSupplierByNumber);

export default router;
