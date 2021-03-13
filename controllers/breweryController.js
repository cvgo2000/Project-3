const db = require("../models");

// Defining methods for the breweriesController
module.exports = {
  //find all breweries by city name
  findAll: function (req, res) {
    db.Brewery.find(req.body)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.log(err));
  },

  //find a random brewery to showcase on front page
  findRandom: function (req, res) {
    var rand = Math.floor(Math.random() * 5);
    db.Brewery.findOne()
      .skip(rand)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //find a brewery by ID (Probably won't use this one)
  findById: function (req, res) {
    db.Brewery.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //add a new brewery to DB
  create: function (req, res) {
    db.Brewery.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //find a brewery by city (FindAll accomplishes this)
  // findByCity: function (req, res) {
  //   console.log(req.body);
  //   db.Brewery.findAll({ location: req.body })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
