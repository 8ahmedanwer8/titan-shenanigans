const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected with Atlas.");
  } catch (error) {
    console.log(`Failed to connect with Atlas. Error: ${error}`);
  }
};
const connection = mongoose.connection;

module.exports = connectDB;
