const mongoose = require("mongoose");
Schema = mongoose.Schema;

const humanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    pic: {
      type: String,
      default: "./assets/isayama.png",
    },
  },
  {
    timestamps: true,
  }
);
const Human = mongoose.model("Human", humanSchema);
module.exports = Human;
