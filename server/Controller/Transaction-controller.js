import Trans from "../Schema/Transcation-Schema.js";

export const addTransaction = async (req, res) => {
  const d = req.body;
  const data = new Trans(d);

  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const data = await Trans.find({}).sort({ _id: -1 });
    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const data = await Trans.deleteOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//////////////////////////////////////////
//////////////////////////////////////////
