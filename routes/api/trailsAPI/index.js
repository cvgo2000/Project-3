const router = require("express").Router();
const trailsController = require("../../../controllers/trailsController");

// Matches with GET "/api/trails"              POST /api/trails
router.route("/").get(trailsController.findAll).post(trailsController.create);

module.exports = router;
