import mongoose from "mongoose";

const user = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const AuthUserModel = mongoose.model("AuthUserModel", user);

export default AuthUserModel;
