import express from "express";
import {
  addTransaction,
  getTransaction,
  deleteTransaction,
} from "../Controller/Transaction-controller.js";

const router = express.Router();

router.post("/add", addTransaction);
router.get("/get", getTransaction);
router.delete("/:id", deleteTransaction);

export default router;
