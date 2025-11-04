const User = require("../models/users");
const Booking = require("../models/booking");
const Bus = require("../models/bus");

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getBookingFromUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findAll({
      include: Booking,
    });
    if (!users) {
      res.status(404).sens("User not found");
    }
    res.status(201).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getAllBookingFromASpecificUserWithBusDetails = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userID: req.params.id },
      attributes: { exclude: ["userId", "busId"] },
      include: { model: Bus, attributes: ["busNumber"] },
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
  addUser,
  getAllBookingFromASpecificUserWithBusDetails,
};
