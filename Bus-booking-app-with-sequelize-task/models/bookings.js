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
    seatNumber: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    travelDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled", "no-show"),
      defaultValue: pending,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    bookedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

module.exports = Booking;
