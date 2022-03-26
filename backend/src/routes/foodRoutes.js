import express from "express";
import {
  //getFoodByName,  
  getFoodById,
  //getFood,
  foodValidators,
  updateFoodById,
  addFood,
  deleteFoodById,
} from "../controllers/foodControllers.js";

const router = express.Router();

//router.get("/", getFood);
//router.get("/search", getFoodByName);
router.get("/:id", getFoodById);

router.put("/:id", foodValidators, updateFoodById);

router.post("/", foodValidators, addFood);

router.delete("/:id", deleteFoodById);

export default router;
