import {check, validationResult} from "express-validator";
import {Employee} from "../models/employee.js";

export const getEmployeeByNumber = async (req, res) => {
    const result = await Employee.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({error: `Number ${
                req.params.number
            } doesn't exist`});
    }
    res.status(200).send(result);
};

export const getEmployee = async (req, res) => {
    const result = await Employee.find();
    res.status(200).send(result);
};

export const updateEmployeeByNumber = async (req, res) => {
    const result = await Employee.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({error: `Number ${
                req.params.number
            } doesn't exist`});
    }
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const updatedEmployee = new Employee({
        number: req.params.number,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        job: req.body.job,
        salary: req.body.salary
    });
    await Employee.replaceOne({
        number: req.params.number
    }, {
        number: req.params.number,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        job: req.body.job,
        salary: req.body.salary
    });
    res.status(200).send(updatedEmployee);
};

export const addEmployee = async (req, res) => {
    const result = await Employee.find({number: req.body.number});
    if (result.length != 0) {
        return res.status(400).send({error: `Number ${
                req.body.number
            } already exists`});
    }
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const employee = new Employee({
        number: req.body.number,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        job: req.body.job,
        salary: req.body.salary
    });
    employee.save(employee);
    res.status(201).send(employee);
};

export const deleteEmployeeByNumber = async (req, res) => {
    const result = await Employee.find({number: req.params.number});
    if (result.length == 0) {
        return res.status(400).send({error: `Number ${
                req.params.number
            } doesn't exist`});
    }
    const deletedEmployee = new Employee({
        number: result.number,
        firstname: result.firstname,
        lastname: result.lastname,
        job: result.job,
        salary: result.salary
    });
    await Employee.deleteOne({number: req.params.number});
    res.status(200).send(`Deleted successful`);
};

export const updateEmployeeValidators = [
    check("firstname").notEmpty().withMessage("firstname field required"),
    check("lastname").notEmpty().withMessage("lastname field required"),
    check("job").notEmpty().withMessage("job field required"),
    check("salary").notEmpty().withMessage("salary field required"),
    check("salary").custom(
        (value, {req}) => {
            if (value < 0) {
                return false;
            }
            return true;
        }
    ).withMessage('invalid salary - valid input: salary has to be higher or equals 0')
];

export const newEmployeeValidators = [
    check("number").notEmpty().withMessage("number field required"),
    check("firstname").notEmpty().withMessage("firstname field required"),
    check("lastname").notEmpty().withMessage("lastname field required"),
    check("job").notEmpty().withMessage("job field required"),
    check("salary").notEmpty().withMessage("salary field required"),
    check("salary").custom(
        (value, {req}) => {
            if (value < 0) {
                return false;
            }
            return true;
        }
    ).withMessage('invalid salary - valid input: salary has to be higher or equals 0')
];
