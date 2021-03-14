const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Trails collection and inserts the trails below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trails_db");

const trailSeed = [
  {
    trail: "Matthew Winters to Dakota Ridge",
    difficulty: "Intermediate",
    location: "Morrison",
    distance: 11.0,
    link:
      "https://www.hikingproject.com/trail/7091963/matthew-winters-to-dakota-ridge-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7055207_medium_1555708575.jpg",
    rating: "4.7 Stars",
  },
  {
    trail: "Centennial Cone Loop",
    difficulty: "Intermediate",
    location: "Idaho Springs",
    distance: 27.7,
    link: "https://www.hikingproject.com/trail/7010705/centennial-cone-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7007207_medium_1554322392.jpg",
    rating: "4.5 Stars",
  },
  {
    trail: "Denver Zoo",
    difficulty: "Easy",
    location: "Denver",
    distance: 4.2,
    link: "https://www.hikingproject.com/trail/7018092/denver-zoo",
    image:
<<<<<<< HEAD
      "https://cdn2.apstatic.com/photos/hike/7017886_medium_1554829962.jpg",
    rating: "4.5 Stars",
=======
      "https://i.pinimg.com/600x315/78/c7/09/78c7097652fb48c30ec68db5c44c34f9.jpg",
>>>>>>> 40be37cf74bae5a7aa7114ceddb14f0c5b398370
  },
  {
    trail: "Golden Cliffs Loop",
    difficulty: "Intermediate",
    location: "Golden",
    distance: 2.6,
    link: "https://www.hikingproject.com/trail/7049083/golden-cliffs-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7004821_medium_1554310856.jpg",
    rating: "4.5 Stars",
  },
  {
    trail: "Mount Morrison",
    difficulty: "Difficult",
    location: "Morrison",
    distance: 5.8,
    link: "https://www.hikingproject.com/trail/7027384/mount-morrison",
    image:
      "https://cdn2.apstatic.com/photos/hike/7055405_medium_1555709037.jpg",
    rating: "4.3 Stars",
  },
  {
    trail: "Highline Canal Trail",
    difficulty: "Easy",
    location: "Roxborough Park",
    distance: 98.7,
    link: "https://www.hikingproject.com/trail/7008385/highline-canal-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7007020_medium_1554321989.jpg",
    rating: "4.5 Stars",
  },
  {
    trail: "Mule Deer and Coyote Trail Loop",
    difficulty: "Intermediate",
    location: "Central City",
    distance: 9.2,
    link:
      "https://www.hikingproject.com/trail/7035817/mule-deer-and-coyote-trail-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7070457_medium_1593295528.jpg",
    rating: "4.4 Stars",
  },
  {
    trail: "Three Sisters Loop",
    difficulty: "Intermediate",
    location: "Evergreen",
    distance: 6.1,
    link: "https://www.hikingproject.com/trail/7025006/three-sisters-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7021291_medium_1554839401.jpg",
    rating: "4.3 Stars",
  },
  {
    trail: "Dream Lake Trail",
    difficulty: "Intermediate",
    location: "Rocky Mountain National Park",
    distance: 1.6,
    link: "https://www.hikingproject.com/trail/7001047/dream-lake-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7031006_medium_1554928949.jpg",
    rating: "4.8 Stars",
  },
  {
    trail: "Loch Vale Trail",
    difficulty: "Intermediate",
    location: "Estes Park",
    distance: 6.5,
    link: "https://www.hikingproject.com/trail/7000278/loch-vale-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7053480_medium_1555703487.jpg",
    rating: "4.6 Stars",
  },
  {
    trail: "Sky Pond",
    difficulty: "Difficult",
    location: "Estes Park",
    distance: 13.3,
    link: "https://www.hikingproject.com/trail/7002175/sky-pond",
    image:
      "https://cdn2.apstatic.com/photos/hike/7008750_medium_1554395076.jpg",
    rating: "4.9 Stars",
  },
  {
    trail: "Bear Lake Trail",
    difficulty: "Easy",
    location: "Estes Park",
    distance: 1.0,
    link: "https://www.hikingproject.com/trail/7000425/bear-lake-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7000788_medium_1554159649.jpg",
    rating: "4.2 Stars",
  },
  {
    trail: "Chavez and Beaver Brook Trail Loop",
    difficulty: "Intermediate",
    location: "Genesee",
    distance: 6.3,
    link:
      "https://www.hikingproject.com/trail/7011049/chavez-and-beaver-brook-trail-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7013651_medium_1554822936.jpg",
    rating: "4.4 Stars",
  },
  {
    trail: "Mountain Lion Trail",
    difficulty: "Intermediate",
    location: "Coal Creek",
    distance: 11.1,
    link: "https://www.hikingproject.com/trail/7009076/mountain-lion-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7007157_medium_1554322291.jpg",
    rating: "4.5 Stars",
  },
  {
    trail: "Alderfer/Three Sisters Loop",
    difficulty: "Intermediate",
    location: "Evergreen",
    distance: 10.6,
    link:
      "https://www.hikingproject.com/trail/7003115/alderferthree-sisters-loop",
    image:
<<<<<<< HEAD
      "https://cdn2.apstatic.com/photos/hike/7021291_medium_1554839401.jpg",
    rating: "4.4 Stars",
=======
      "https://cdn-assets.alltrails.com/uploads/photo/image/23690794/large_7b082a4cfd668007026c0c81a06b19e6.jpg",
>>>>>>> 40be37cf74bae5a7aa7114ceddb14f0c5b398370
  },
  {
    trail: "Sunshine Lion's Lair Loop",
    difficulty: "Intermediate",
    location: "Boulder",
    distance: 8.5,
    link:
      "https://www.hikingproject.com/trail/7004226/sunshine-lions-lair-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7004293_medium_1554244580.jpg",
    rating: "4.5 Stars",
  },
  {
    trail: "Mount Sanitas Loop",
    difficulty: "Intermediate",
    location: "Boulder",
    distance: 5.2,
    link: "https://www.hikingproject.com/trail/7000000/mount-sanitas-loop",
    image:
      "https://cdn2.apstatic.com/photos/hike/7029509_medium_1554924656.jpg",
    rating: "4.1 Stars",
  },
  {
    trail: "Mt. Bierstadt - West Slopes",
    difficulty: "Intermediate",
    location: "Georgetown",
    distance: 11.6,
    link:
      "https://www.hikingproject.com/trail/7001739/mt-bierstadt-west-slopes",
    image:
      "https://cdn2.apstatic.com/photos/hike/7037364_medium_1555085823.jpg",
    rating: "4.3 Stars",
  },
  {
    trail: "South Arapaho Peak",
    difficulty: "Difficult",
    location: "Nederland",
    distance: 13.8,
    link: "https://www.hikingproject.com/trail/7006885/south-arapaho-peak",
    image:
      "https://cdn2.apstatic.com/photos/hike/7024359_medium_1554846789.jpg",
    rating: "4.8 Stars",
  },
  {
    trail: "Herman Gulch Trail #98",
    difficulty: "Intermediate",
    location: "Georgetown",
    distance: 5.3,
    link: "https://www.hikingproject.com/trail/7006073/herman-gulch-trail-98",
    image:
      "https://cdn2.apstatic.com/photos/hike/7024352_medium_1554846773.jpg",
    rating: "4.6 Stars",
  },
  {
    trail: "Chief Mountain Trail #58",
    difficulty: "Intermediate",
    location: "Idaho Springs",
    distance: 2.4,
    link: "https://www.hikingproject.com/trail/7006074/chief-mountain-trail-58",
    image:
      "https://cdn2.apstatic.com/photos/hike/7047977_medium_1555538253.jpg",
    rating: "4.4 Stars",
  },
  {
    trail: "Mills Lake - Black Lake Trail",
    difficulty: "Intermediate",
    location: "Estes Park",
    distance: 5.2,
    link:
      "https://www.hikingproject.com/trail/7000499/mills-lake-black-lake-trail",
    image:
      "https://cdn2.apstatic.com/photos/hike/7000877_medium_1554159770.jpg",
    rating: "4.6 Stars",
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
