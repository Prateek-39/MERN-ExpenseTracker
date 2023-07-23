import express from "express";
import {
  addTransaction,
  getTransaction,
  deleteTransaction,
} from "../Controller/Transaction-controller.js";
import { login, signup } from "../Controller/auth-controller.js";

const router = express.Router();

router.post("/add", addTransaction);
router.get("/get", getTransaction);
router.delete("/:id", deleteTransaction);

router.post("/signup", signup);
router.post("/login", login);

export default router;
