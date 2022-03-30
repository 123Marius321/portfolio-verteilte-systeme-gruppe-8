import { check, validationResult } from "express-validator";
import { Food } from "../models/food.js";

export const getFoodById = async (req, res) => {
  const result = await Food.findById( req.params.id );
  if (result.length == 0) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  res.status(200).send(result);
};

export const getFood = async (req, res) => {
  const result = await Food.find();
  res.status(200).send(result);
};

export const updateFoodById = async (req, res) => {
  const result = await Food.findById( req.params.id );
  if (result.length == 0) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const updatedFood = new Food ({
    _id: req.params.id, 
    name: req.body.name, 
    price: req.body.price, 
    course: req.body.course
  });
  await Food.replaceOne(
    { _id: req.params.id },
    { name: req.body.name, price : req.body.price, course : req.body.course }
  );
  res.status(200).send(updatedFood);
};

export const addFood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const food = new Food({
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    course: req.body.course,
  });
  food.save(food);
  /*Food.insertOne({
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    course: req.body.course,
  });*/
  res.status(201).send(food);
};

export const deleteFoodById = async (req, res) => {
  const result = await Food.findById( req.params.id );
  if (result.length == 0) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  const deletedFood = new Food({
    _id: result._id,
    name: result.name,
    price: result.Foodprice,
    course: result.course,
  });
  await Food.deleteOne( { _id: req.params.id} );
  res.status(200).send(`Deleted ${deletedFood.name} with Id ${deletedFood._id} from food collection`);
};

export const updateFoodValidators = [
  check("name").notEmpty().withMessage("name field required"),
  check("price").notEmpty().withMessage("price field required"),
  check("course").notEmpty().withMessage("course field required"),
  check("course").custom((value, { req }) => {
    if (value != "Vorspeise" && value != "Hauptspeise" && value != "Dessert") {
      return false;
    }
    return true;
  }).withMessage('Invalid Course')
];

export const newFoodValidators = [
  check("_id").notEmpty().withMessage("_id field required"),
  check("name").notEmpty().withMessage("name field required"),
  check("price").notEmpty().withMessage("price field required"),
  check("course").notEmpty().withMessage("course field required"),
  check("course").custom((value, { req }) => {
    if (value != "Vorspeise" && value != "Hauptspeise" && value != "Dessert") {
      return false;
    }
    return true;
  }).withMessage('Invalid Course')
];



/*export const getFoodByName = (req, res) => {
  let result = food.filter((food) => food.name == req.query.name);
  res.status(200).send(result);
};*/
/*export const getFood = (req, res) => {
  res.status(200).send(food);
};*/