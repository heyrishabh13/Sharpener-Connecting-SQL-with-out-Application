const { Sequelize, Op } = require("sequelize");
const sequelize = require("../utils/db-connection");
const Buses = require("../models/buses");
const { get } = require("../routes/userRoutes");

const addBuses = async (req, res) => {
  try {
    const { busNo, availableSeats, totalSeats } = req.body;
    const buses = await Buses.create({
      busNo,
      availableSeats,
      totalSeats,
    });
    if (!buses) {
      res.status(404).send("Bus not found");
    }
    res.status(201).send("Bus data created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: Not able to add bus data");
  }
};

const getBusesWithGreaterThanSpecifiedNumberOfSeats = async (req, res) => {
  try {
    const seats = req.params.seats;
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });
    if (!buses) {
      res.status(404).send("Bus not found");
    }
    res.status(200).json(buses);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: while getting buses data");
  }
};

module.exports = {
  addBuses,
  getBusesWithGreaterThanSpecifiedNumberOfSeats,
};
