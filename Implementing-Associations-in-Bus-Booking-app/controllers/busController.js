const Booking = require("../models/booking");
const Bus = require("../models/bus");
const User = require("../models/users");

const addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    if (!bus) {
      res.status(404).send("Bus not found");
    }
    res.status(201).json(bus);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getAllBookingsForASpecificBusWithUserDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const bookings = await Booking.findAll({
      where: { busId: id },
      attributes: { exclude: ["userId", "busId"] },
      include: User,
    });
    if (!bookings) {
      res.status(404).send("Booking not found");
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBus,
  getAllBookingsForASpecificBusWithUserDetails,
};
