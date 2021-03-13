const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  //trail name will be a string
  trail: { type: String, required: true },
  //difficulty will either be a string of easy, medium or hard or a value ouf 1-5
  difficulty: { type: String, required: true },
  //location will be a string
  location: { type: String, required: true },
  //distance will be a value in miles
  distance: Number,
  //link will be an href/string
  link: { type: String, required: true },
  //link to image will be an href/string
  image: { type: String, required: true },
  //rating will be a string
  rating: { type: String, required: true },
});

const Trails = mongoose.model("Trails", trailSchema);

module.exports = Trails;
