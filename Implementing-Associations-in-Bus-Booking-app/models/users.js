const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
