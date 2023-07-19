import mongoose from "mongoose";

const TransSchema = mongoose.Schema({
  date: { type: String, require: true },
  text: { type: String, require: true },
  amount: { type: Number, require: true },
});

const Trans = mongoose.model("Trans", TransSchema);

export default Trans;
