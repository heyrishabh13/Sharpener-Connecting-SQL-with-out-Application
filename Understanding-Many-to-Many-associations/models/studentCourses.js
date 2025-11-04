const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const StudentCourses = sequelize.define(
  "StudentCourses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    tableName: "studentCourses",
    timestamps: false,
  }
);

module.exports = StudentCourses;
