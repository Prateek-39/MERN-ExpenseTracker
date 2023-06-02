import mongoose from "mongoose";

const TransSchema = mongoose.Schema({
  id: Number,
  date: String,
  text: String,
  amount: Number,
});

const Trans = mongoose.model("Trans", TransSchema);

export default Trans;
