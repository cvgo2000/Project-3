const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  //name will be a string
  name: { type: String, required: true },
  //difficulty will either be a string of easy, medium or hard or a value ouf 1-5
  difficulty: { type: String, required: true },
  //distance will be a value in miles
  distance: Number,
  //location will be a string
  location: { type: String, required: true },
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
