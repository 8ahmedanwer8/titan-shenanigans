const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config");

db = connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, console.log(`SUPPPP  from ${port}`));
