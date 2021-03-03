const router = require("express").Router();
const breweryRoutes = require("./breweries");

// Trail routes
router.use("/breweries", breweryRoutes);

module.exports = router;
