const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  distance: String,
  location: { type: String, required: true },
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
