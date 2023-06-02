import express from "express";
import Connection from "./Database/db.js";

const app = express();

Connection();

app.listen(8000, () => {
  console.log("Server ready at PORT 8000 Successfully");
});
