const express = require("express");
const busesController = require("../controllers/busesController");

const router = express.Router();

router.post("/", busesController.addBuses);
router.get(
  "/:seats",
  busesController.getBusesWithGreaterThanSpecifiedNumberOfSeats
);

module.exports = router;
