const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    seatNumber: DataTypes.INTEGER,
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

module.exports = Booking;
