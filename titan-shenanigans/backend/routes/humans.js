const router = require("express").Router();
let Human = require("../models/humanModel");

router.route("/").get((req, res) => {
  Human.find() //find is a mongoose method that gets list of all Humans and returns a promise
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").get((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const pic = req.body.pic;

  Human.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
