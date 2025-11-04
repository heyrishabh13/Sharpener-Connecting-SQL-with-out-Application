const Booking = require("../models/booking");
const Bus = require("../models/bus");

const addBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    if (!booking) {
      res.status(404).send("Booking not found");
    }
    res.status(201).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBooking,
};
