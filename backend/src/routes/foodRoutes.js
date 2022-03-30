import express from "express";
import {
  getFood,
  getFoodById,  
  updateFoodValidators,
  newFoodValidators,
  updateFoodById,
  addFood,
  deleteFoodById,
} from "../controllers/foodControllers.js";

const router = express.Router();

router.get("/", getFood);

router.get("/:id", getFoodById);

router.put("/:id", updateFoodValidators, updateFoodById)

router.post("/", newFoodValidators, addFood);

router.delete("/:id", deleteFoodById);

export default router;
