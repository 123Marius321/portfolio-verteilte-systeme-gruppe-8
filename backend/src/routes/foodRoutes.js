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

router.put("/update/:number", updateFoodValidators, updateFoodByNumber)

router.post("/add", newFoodValidators, addFood);

router.delete("/remove/:number", deleteFoodByNumber);

export default router;
