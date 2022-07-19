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
    height: {
      type: Number,
      required: true,
      trim: true,
    },
    currentHost: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
