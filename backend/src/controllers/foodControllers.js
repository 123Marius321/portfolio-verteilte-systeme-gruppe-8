import {check, validationResult} from "express-validator";
import {Food} from "../models/food.js";

export const getFoodByNumber = async (req, res) => {
    const result = await Food.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({
                error: `Number ${
                req.params.number
            } doesn't exist`
        });
    }
    res.status(200).send(result);
};

export const getFood = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const result = await Food.find();
    res.status(200).send(result);
};

export const updateFoodByNumber = async (req, res) => {
    const result = await Food.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({
                error: `Number ${
                req.params.number
            } doesn't exist`
        });
    }
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const updatedFood = new Food({number: req.params.number, name: req.body.name, price: req.body.price, course: req.body.course});
    await Food.replaceOne({
        number: req.params.number
    }, {
        number: req.params.number,
        name: req.body.name,
        price: req.body.price,
        course: req.body.course
    });
    res.status(200).send(updatedFood);
};

export const addFood = async (req, res) => {
    const result = await Food.find({number: req.body.number});
    if (result.length != 0) {
        return res.status(400).send({
                error: `Number ${
                req.body.number
            } already exists`
        });
    }
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const food = new Food({number: req.body.number, name: req.body.name, price: req.body.price, course: req.body.course});
    food.save(food);
    res.status(201).send(food);
};

export const deleteFoodByNumber = async (req, res) => {
    const result = await Food.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({
                error: `Number ${
                req.params.number
            } doesn't exist`
        });
    }
    const deletedFood = new Food({number: result.number, name: result.name, price: result.price, course: result.course});
    console.log(deletedFood);
    await Food.deleteOne({number: req.params.number});
    console.log(deletedFood);
    res.status(200).send(`Deleted successful`);
};

export const updateFoodValidators = [
    check("name").notEmpty().withMessage("name field required"), check("price").notEmpty().withMessage("price field required"), check("course").notEmpty().withMessage("course field required"), check("course").custom(
        (value, {req}) => {
            if (value != "starter" && value != "main course" && value != "dessert") {
                return false;
            }
            return true;
        }
    ).withMessage('invalid Course - valid input: starter, main course, dessert')
];

export const newFoodValidators = [
    check("number").notEmpty().withMessage("number field required"),
    check("name").notEmpty().withMessage("name field required"),
    check("price").notEmpty().withMessage("price field required"),
    check("course").notEmpty().withMessage("course field required"),
    check("course").custom(
        (value, {req}) => {
            if (value != "starter" && value != "main course" && value != "dessert") {
                return false;
            }
            return true;
        }
    ).withMessage('invalid Course - valid input: starter, main course, dessert')
];
