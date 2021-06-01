const mongoose = require("mongoose");
const MONGO_URI = require("./keys");

const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
      })
      .then(() => console.log("connected to MongoDB"));
  } catch (e) {
    console.log(e);
    console.error("failed to connect to MongoDB");
    process.exit(1);
  }
};

module.exports = connectDB;
