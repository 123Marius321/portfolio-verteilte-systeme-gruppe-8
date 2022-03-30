import express from "express";
import bodyParser from "body-parser";
import foodRoutes from "./routes/foodRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/food", foodRoutes);
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
