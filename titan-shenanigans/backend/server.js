const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config");

const humansRouter = require("./routes/humans");
const titansRouter = require("./routes/titans");
console.log(connectDB, titansRouter);
db = connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, console.log(`SUPPPP  from ${port}`));

// app.use("/humans", humansRouter);
// app.use("/titansRouter", titansRouter);
