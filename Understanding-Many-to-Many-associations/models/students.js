const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Student = sequelize.define(
  "Student",
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
    tableName: "students",
    timestamps: false,
  }
);

module.exports = Student;
