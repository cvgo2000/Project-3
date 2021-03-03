const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  //name will be a string
  name: { type: String, required: true },
  //rating will be either a string a value between 1-5
  rating: { type: String, required: true },
  //price will either be a string of low, medium or high or a value between 1-5
  price: String,
  //location will be a string
  location: { type: String, required: true },
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
