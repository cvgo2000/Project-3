const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trails");

const trailSeed = [
  {
    trail: "Matthew Winters to Dakota Ridge",
    difficulty: "Intermediate",
    location: "Morrison",
    distance: "11.0 km",
    link:
      "https://www.hikingproject.com/trail/7091963/matthew-winters-to-dakota-ridge-trail",
  },
  {
    trail: "Centennial Cone Loop",
    difficulty: "Intermediate",
    location: "Idaho Springs",
    distance: "27.7 km",
    link: "https://www.hikingproject.com/trail/7010705/centennial-cone-loop",
  },
  {
    trail: "Denver Zoo",
    difficulty: "Easy",
    location: "Denver",
    distance: "4.2 km",
    link: "https://www.hikingproject.com/trail/7018092/denver-zoo",
  },
  {
    trail: "Golden Cliffs Loop",
    difficulty: "Intermediate",
    location: "Golden",
    distance: "2.6 km",
    link: "https://www.hikingproject.com/trail/7049083/golden-cliffs-loop",
  },
  {
    trail: "Mount Morrison",
    difficulty: "Difficult",
    location: "Morrison",
    distance: "5.8 km",
    link: "https://www.hikingproject.com/trail/7027384/mount-morrison",
  },
  {
    trail: "Highline Canal Trail",
    difficulty: "Easy",
    location: "Roxborough Park",
    distance: "98.7 km",
    link: "https://www.hikingproject.com/trail/7008385/highline-canal-trail",
  },
  {
    trail: "Mule Deer and Coyote Trail Loop",
    difficulty: "Intermediate",
    location: "Central City",
    distance: "9.2 km",
    link:
      "https://www.hikingproject.com/trail/7035817/mule-deer-and-coyote-trail-loop",
  },
  {
    trail: "Three Sisters Loop",
    difficulty: "Intermediate",
    location: "Evergreen",
    distance: "6.1 km",
    link: "https://www.hikingproject.com/trail/7025006/three-sisters-loop",
  },
  {
    trail: "Dream Lake Trail",
    difficulty: "Intermediate",
    location: "Rocky Mountain National Park",
    distance: "1.6 km",
    link: "https://www.hikingproject.com/trail/7001047/dream-lake-trail",
  },
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
  {
    trail: "Bear Lake Trail",
    difficulty: "Easy",
    location: "Estes Park",
    distance: "1.0 km",
    link: "https://www.hikingproject.com/trail/7000425/bear-lake-trail",
  },
  {
    trail: "Chavez and Beaver Brook Trail Loop",
    difficulty: "Intermediate",
    location: "Genesee",
    distance: "6.3 km",
    link:
      "https://www.hikingproject.com/trail/7011049/chavez-and-beaver-brook-trail-loop",
  },
  {
    trail: "Mountain Lion Trail",
    difficulty: "Intermediate",
    location: "Coal Creek",
    distance: "11.1 km",
    link: "https://www.hikingproject.com/trail/7009076/mountain-lion-trail",
  },
  {
    trail: "Alderfer/Three Sisters Loop",
    difficulty: "Intermediate",
    location: "Evergreen",
    distance: "10.6 km",
    link:
      "https://www.hikingproject.com/trail/7003115/alderferthree-sisters-loop",
  },
  {
    trail: "Sunshine Lion's Lair Loop",
    difficulty: "Intermediate",
    location: "Boulder",
    distance: "8.5 km",
    link:
      "https://www.hikingproject.com/trail/7004226/sunshine-lions-lair-loop",
  },
  {
    trail: "Mount Sanitas Loop",
    difficulty: "Intermediate",
    location: "Boulder",
    distance: "5.2 km",
    link: "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop",
  },
  {
    trail: "Mt. Bierstadt - West Slopes",
    difficulty: "Intermediate",
    location: "Georgetown",
    distance: "11.6 km",
    link:
      "https://www.hikingproject.com/trail/7001739/mt-bierstadt-west-slopes",
  },
  {
    trail: "South Arapaho Peak",
    difficulty: "Difficult",
    location: "Nederland",
    distance: "13.8 km",
    link: "https://www.hikingproject.com/trail/7006885/south-arapaho-peak",
  },
  {
    trail: "Herman Gulch Trail #98",
    difficulty: "Intermediate",
    location: "Georgetown",
    distance: "5.3 km",
    link: "https://www.hikingproject.com/trail/7006073/herman-gulch-trail-98",
  },
  {
    trail: "Chief Mountain Trail #58",
    difficulty: "Intermediate",
    location: "Idaho Springs",
    distance: "2.4 km",
    link: "https://www.hikingproject.com/trail/7006074/chief-mountain-trail-58",
  },
  {
    trail: "Mills Lake - Black Lake Trail",
    difficulty: "Intermediate",
    location: "Estes Park",
    distance: "5.2 km",
    link:
      "https://www.hikingproject.com/trail/7000499/mills-lake-black-lake-trail",
  },
];

db.Trails.remove({})
  .then(() => db.Trails.collection.insertMany(trailSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
