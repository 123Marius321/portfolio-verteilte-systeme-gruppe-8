import express from "express";
import {
  getFood,
  getFoodByNumber,  
  updateFoodValidators,
  newFoodValidators,
  updateFoodByNumber,
  addFood,
  deleteFoodByNumber,
} from "../controllers/foodControllers.js";

const router = express.Router();

router.get("/", getFood);

router.get("/:number", getFoodByNumber);

router.put("/:number", updateFoodValidators, updateFoodByNumber)

router.post("/", newFoodValidators, addFood);

router.delete("/:number", deleteFoodByNumber);

export default router;
