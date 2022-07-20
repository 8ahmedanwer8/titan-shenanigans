const mongoose = require("mongoose");
Schema = mongoose.Schema;

const titanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    abilities: {
      type: String,
      minlength: 3,
    },
    height: {
      type: Number,
      required: true,
      trim: true,
    },
    currentHost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Human",
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
const Titan = mongoose.model("Titan", titanSchema);
module.exports = Titan;
