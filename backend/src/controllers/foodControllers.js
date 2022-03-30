import { check, validationResult } from "express-validator";

const food = [
  {
    id: 0,
    name: "Schnitzel",
    price: "1000",
    course: "Hauptspeise",
  },
  {
    id: 1,
    name: "Apfelküchle",
    price: "10000",
    course: "Hauptspeise",
  },
];

export const getFoodById = (req, res) => {
  let result = food.find((food) => food.id == req.params.id);
  if (result == undefined) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  res.status(200).send(result);
};

export const updateFoodById = (req, res) => {
  let result = food.find((food) => food.id == req.params.id);
  if (result == undefined) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  result.name = req.body.name;
  result.price = req.body.price;
  result.course = req.body.course;
  res.status(200).send(`Updated ${req.body.name} from food collection`);
};

export const addFood = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  food.push(req.body);
  res.status(201).send(`Added ${req.body.name} to food collection`);
};

export const deleteFoodById = (req, res) => {
  let resultIndex = food.findIndex((food) => food.id == req.params.id);
  let result = food.find((food) => food.id == req.params.id);
  if (result == undefined) {
    return res.status(400).send({ error: `ID ${req.params.id} doesn't exist` });
  }
  let delName = result.name
  food.splice(resultIndex,1);
  res.status(200).send(`Deleted ${delName} from food collection`);
};

export const foodValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("price").notEmpty().withMessage("Price field required"),
  check("course").notEmpty().withMessage("Course field required"),
  check("course").custom((value, { req }) => {
    if (value != "Vorspeise" && value != "Hauptspeise" && value != "Dessert") {
      return false;
    }
    return true;
  }).withMessage('Invalid Course'),
];




/*export const getFoodByName = (req, res) => {
  let result = food.filter((food) => food.name == req.query.name);
  res.status(200).send(result);
};*/
/*export const getFood = (req, res) => {
  res.status(200).send(food);
};*/