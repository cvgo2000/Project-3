const db = require("../models/trailModels/trail");

// Defining methods for the trailsController
module.exports = {
  //find all trails in DB
  findAll: function (req, res) {
    // console.log(req.body);
    // res.send(req.body);
    //TEST ARRAY TO SEND TO FRONT END
    const estes = [
      {
        trail: "Loch Vale Trail",
        difficulty: "Intermediate",
        location: "Estes Park",
        distance: "6.5 km",
        link: "https://www.hikingproject.com/trail/7000278/loch-vale-trail",
      },
      {
        trail: "Sky Pond",
        difficulty: "Difficult",
        location: "Estes Park",
        distance: "13.3 km",
        link: "https://www.hikingproject.com/trail/7002175/sky-pond",
      },
    ];
    res.json(estes);
    // db.find(req.body)
    //   //   //   //   .sort({ date: -1 })
    //   .then((dbModel) => console.log(dbModel));
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
