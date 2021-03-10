const db = require("../models/breweryModels");

// Defining methods for the breweriesController
module.exports = {
  //find all breweries in DB
  findAll: function (req, res) {
    db.Brewery.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //find a brewery by ID
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
  //find a brewery by city
  findByCity: function (req, res) {
    console.log(req.body);
    db.Brewery.findAll({ location: req.body })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
