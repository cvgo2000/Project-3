const db = require("../models/");

// Defining methods for the trailsController
module.exports = {
  //find all trails matching city name in database
  findAll: (req, res) => {
    db.Trails.findOne(req.body)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.log(err));
  },

  //add a trail to the DB
  create: function (req, res) {
    console.log("inside of create, ", req.body);
    db.Trails.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //find a trail by ID
  // findById: function (req, res) {
  //   db.Trail.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  //find a trail by city
  // findByCity: function (req, res) {
  //   console.log(req.body);
  //   db.Trail.findAll({ location: req.body })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
