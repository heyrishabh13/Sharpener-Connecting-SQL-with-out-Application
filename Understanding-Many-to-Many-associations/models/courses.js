const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Courses = sequelize.define(
  "Courses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: "courses",
    timestamps: false,
  }
);

module.exports = Courses;
