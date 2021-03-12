const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  //trail name will be a string
  trail: { type: String },
  //difficulty will either be a string of easy, medium or hard or a value ouf 1-5
  difficulty: { type: String },
  //location will be a string
  location: { type: String },
  //distance will be a value in miles
  distance: Number,
  //link will be an href/string
  link: { type: String },
});

const Trails = mongoose.model("Trails", trailSchema);

module.exports = Trails;
