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

router.put("/:number", updateSupplierValidators, updateSupplierByNumber)

router.post("/", newSupplierValidators, addSupplier);

router.delete("/:number", deleteSupplierByNumber);

export default router;
