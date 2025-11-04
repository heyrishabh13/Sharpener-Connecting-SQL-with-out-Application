const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Bus = sequelize.define(
  "Bus",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    busNumber: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER,
  },
  {
    tableName: "buses",
    timestamps: false,
  }
);

module.exports = Bus;
