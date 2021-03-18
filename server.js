const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const route = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const databaseURL = "trails";
const collections = ["trailseed"];

const db = mongojs(databaseURL, collections);

//Added connection to seedDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/trails_db",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to database");
  }
);

// Define API routes here
app.use(route);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
