const db = require("../models");

// Defining methods for the trailsController
module.exports = {
  //find all trails matching the city name
  findAll: function (req, res) {
    db.Trail.find(req.body)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.log(err));
  },

  //find a random trail to showcase on front page
  findRandom: function (req, res) {
    var rand = Math.floor(Math.random() * 5);
    db.Trail.findOne()
      .skip(rand)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //find a trail by ID (Probably won't use this one)
  findById: function (req, res) {
    db.Trail.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //add a trail to the DB
  create: function (req, res) {
    db.Trail.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //find a trail by city (FindAll accomplishes this)
  // findByCity: function (req, res) {
  //   console.log(req.body);
  //   db.Trail.findAll({ location: req.body })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
