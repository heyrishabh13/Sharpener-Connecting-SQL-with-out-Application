const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Buses = sequelize.define(
  "Buses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    busNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Buses;
