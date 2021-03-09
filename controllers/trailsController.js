const db = require("../models/trailModels");

// Defining methods for the trailsController
module.exports = {
  //find all trails in DB
  findAll: function (req, res) {
    console.log(req.body);
    // console.log(req.body);
    // res.send(req.body);
    db.Trail.find(req.body)
      //   .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel));
    //   .catch((err) => res.status(422).json(err));
  },
  //find a trail by ID
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
  //find a trail by city
  findByCity: function (req, res) {
    console.log(req.body);
    db.Trail.findAll({ location: req.body })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
