import express from "express";
import bodyParser from "body-parser";
import foodRoutes from "./routes/foodRoutes.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/food", foodRoutes);
app.all("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
