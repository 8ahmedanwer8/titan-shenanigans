const router = require("express").Router();
let Titan = require("../models/titanModel");

router.route("/").get((req, res) => {
  Titan.find() //find is a mongoose method that gets list of all Humans and returns a promise
    .then((titans) => res.json(titans))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const abilities = req.body.name;
  const pic = req.body.pic;
  const height = req.body.height;
  const currentHost = req.body.currentHost;

  const newTitan = new Titan({ name, abilities, height, currentHost, pic });
  newTitan
    .save()
    .then(() => res.json(`Added ${name}`))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Titan.findById(req.params.id)
    .then((titan) => res.json(titan))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Titan.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Deleted!`)) //add the name of the Titan to show who's deleted
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Titan.findById(req.params.id)
    .then((titan) => {
      titan.name = req.body.name;
      titan.abilities = req.body.age;
      titan.height = Number(req.body.height);
      titan.currentHost = req.body.currentHost;
      titan.pic = req.body.pic;

      titan
        .save()
        .then(() => res.json(`${titan.name} updated!`))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
