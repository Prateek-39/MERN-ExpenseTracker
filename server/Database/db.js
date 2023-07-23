import mongoose from "mongoose";

const URL =
  "mongodb://x:x@ac-bsvrpsr-shard-00-00.8xvj7op.mongodb.net:27017,ac-bsvrpsr-shard-00-01.8xvj7op.mongodb.net:27017,ac-bsvrpsr-shard-00-02.8xvj7op.mongodb.net:27017/?ssl=true&replicaSet=atlas-ud40uk-shard-0&authSource=admin&retryWrites=true&w=majority";

const Connection = async () => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("MongoDB Connection is SuccessFully");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
