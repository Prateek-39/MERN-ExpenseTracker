import Trans from "../Schema/Transcation-Schema.js";
import jwt from "jsonwebtoken";
const secretKey = "Hellomynameisprateek321123";

///////////////////////
const verify_token = async (token) => {
  const data = await jwt.verify(token, secretKey);
  return data;
};

////////////////////

export const addTransaction = async (req, res) => {
  const { date, text, amount } = req.body;
  const token = await req.headers.token;
  const addedById = await verify_token(token);
  const data = new Trans({
    date,
    text,
    amount,
    addedBy: addedById.user.id,
  });

  try {
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const token = await req.headers.token;
    const addedById = await verify_token(token);
    const data = await Trans.find({ addedBy: addedById.user.id }).sort({
      _id: -1,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const data = await Trans.deleteOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//////////////////////////////////////////
