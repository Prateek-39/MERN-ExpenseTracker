import mongoose from "mongoose";
import AuthUserModel from "./authuser-schema.js";

const TransSchema = mongoose.Schema({
  date: { type: String, require: true },
  text: { type: String, require: true },
  amount: { type: Number, require: true },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AuthUserModel,
  },
});

const Trans = mongoose.model("Trans", TransSchema);

export default Trans;
