const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Expense = sequelize.define(
  "Expense",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: {
      type: DataTypes.ENUM("fuel", "food", "electricity", "movie"),
      defaultValue: "fuel",
    },
  },
  {
    tableName: "expenses",
    timestamps: false,
  }
);

module.exports = Expense;
