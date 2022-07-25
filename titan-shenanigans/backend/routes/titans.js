const router = require("express").Router();
let Titan = require("../models/titanModel");

router.route("/").get((req, res) => {
  Titan.find() //find is a mongoose method that gets list of all Humans and returns a promise
    .then((titans) => res.json(titans))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const height = req.body.height;
  const currentHost = req.body.currentHost;

  const newTitan = new Titan({ name, height, currentHost });
  newTitan
    .save()
    .then(() => res.json(`Added ${name}`))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
