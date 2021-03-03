const router = require("express").Router();
const trailsController = require("../../controllers/trailsController");

// Matches with "/api/books"
router.route("/").get(trailsController.findAll).post(trailsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(trailsController.findById)
  .put(trailsController.update)
  .delete(trailsController.remove);

module.exports = router;
