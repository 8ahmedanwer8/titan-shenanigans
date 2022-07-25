const router = require("express").Router();
let Human = require("../models/humanModel");

router.route("/").get((req, res) => {
  Human.find() //find is a mongoose method that gets list of all Humans and returns a promise
    .then((humans) => res.json(humans))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const name = req.body.name;
  const age = 21;
  const pic = req.body.pic;
  newHuman = new Human({ name, age, pic });
  newHuman
    .save()
    .then(() => res.json(`Added ${name}`))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Human.findById(req.params.id)
    .then((human) => res.json(human))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Human.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Deleted!`)) //add the name of the human to show who's deleted
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Human.findById(req.params.id)
    .then((human) => {
      human.name = req.body.name;
      human.age = Number(req.body.age);
      human.pic = req.body.pic;

      human
        .save()
        .then(() => res.json(`${human.name} updated!`))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
