import { check, validationResult } from "express-validator";
import { Supplier } from "../models/supplier.js";

export const getSupplierByNumber = async (req, res) => {
  const result = await Supplier.find({ number: req.params.number });
  if (result.length == 0) {
    return res
      .status(400)
      .send({ error: `Number ${req.params.number} doesn't exist` });
  }
  res.status(200).send(result);
};

export const getSupplier = async (req, res) => {
  const result = await Supplier.find();
  res.status(200).send(result);
};

export const updateSupplierByNumber = async (req, res) => {
  const result = await Supplier.find({ number: req.params.number });
  if (result.length == 0) {
    return res
      .status(400)
      .send({ error: `Number ${req.params.number} doesn't exist` });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const updatedSupplier = new Supplier({
    number: req.params.number,
    companyName: req.body.companyName,
    delivery: req.body.delivery,
    deliveryDay: req.body.deliveryDay,
  });
  await Supplier.replaceOne(
    {
      number: req.params.number,
    },
    {
      number: req.params.number,
      companyName: req.body.companyName,
      delivery: req.body.delivery,
      deliveryDay: req.body.deliveryDay,
    }
  );
  res.status(200).send(updatedSupplier);
};

export const addSupplier = async (req, res) => {
  const result = await Supplier.find({ number: req.body.number });
  if (result.length != 0) {
    return res
      .status(400)
      .send({ error: `Number ${req.body.number} already exists` });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const supplier = new Supplier({
    number: req.body.number,
    companyName: req.body.companyName,
    delivery: req.body.delivery,
    deliveryDay: req.body.deliveryDay,
  });
  supplier.save(supplier);
  res.status(201).send(supplier);
};

export const deleteSupplierByNumber = async (req, res) => {
  const result = await Supplier.find({ number: req.params.number });
  if (result.length == 0) {
    return res
      .status(400)
      .send({ error: `Number ${req.params.number} doesn't exist` });
  }
  const deletedSupplier = new Supplier({
    number: result.number,
    companyName: result.companyName,
    delivery: result.delivery,
    deliveryDay: result.deliveryDay,
  });
  console.log(deletedSupplier);
  await Supplier.deleteOne({ number: req.params.number });
  console.log(deletedSupplier);
  res.status(200).send(`Deleted successful`);
};

export const updateSupplierValidators = [
  check("name").notEmpty().withMessage("name field required"),
  check("companyName").notEmpty().withMessage("companyName field required"),
  check("delivery")
    .isLength({ min: 1 })
    .withMessage("invalid delivery - valid input: at least one entry"),
  check("delivery").notEmpty().withMessage("delivery field required"),
  check("deliveryDay").notEmpty().withMessage("deliveryDay field required"),
  check("deliveryDay")
    .custom((value, { req }) => {
      if (
        value != "monday" &&
        value != "tuesday" &&
        value != "wednesday" &&
        value != "thursday" &&
        value != "friday" &&
        value != "saturday" &&
        value != "sunday"
      ) {
        return false;
      }
      return true;
    })
    .withMessage(
      "invalid deliveryDay - valid input: monday, tuesday, wednesday, thursday, friday, saturday, sunday"
    ),
];

export const newSupplierValidators = [
  check("number").notEmpty().withMessage("number field required"),
  check("companyName").notEmpty().withMessage("companyName field required"),
  check("delivery")
    .isLength({ min: 1 })
    .withMessage("invalid delivery - valid input: at least one entry"),
  check("delivery").notEmpty().withMessage("delivery field required"),
  check("deliveryDay").notEmpty().withMessage("deliveryDay field required"),
  check("deliveryDay")
    .custom((value, { req }) => {
      if (
        value != "monday" &&
        value != "tuesday" &&
        value != "wednesday" &&
        value != "thursday" &&
        value != "friday" &&
        value != "saturday" &&
        value != "sunday"
      ) {
        return false;
      }
      return true;
    })
    .withMessage(
      "invalid deliveryDay - valid input: monday, tuesday, wednesday, thursday, friday, saturday, sunday"
    ),
];
