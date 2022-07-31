const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config");

const humansRouter = require("./routes/humans");
const titansRouter = require("./routes/titans");
const chatRoutes = require("./routes/chats");

db = connectDB();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, console.log(`SUPPPP  from ${port}`));
app.get("/", (req, res) => {
  console.log("req received");
  res.send("API Running!");
});
app.use("/humans", humansRouter);
app.use("/titans", titansRouter);
app.use("/api/chat", chatRoutes);
