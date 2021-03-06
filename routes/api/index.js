const router = require("express").Router();

const trailsApi = require("./trailsAPI");
// const brewApi = require("./breweriesAPI");
router.use("/trails", trailsApi);
// router.use("/breweries", brewApi);

module.exports = router;
