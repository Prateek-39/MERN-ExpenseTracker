import express from "express";
import Connection from "./Database/db.js";
import bodyParser from "body-parser";
import Router from "./Router/routes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Router);

Connection();

app.listen(8000, () => {
  console.log("Server ready at PORT 8000 Successfully");
});
