const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(3),
      defaultValue: "USD",
    },
    gateway: {
      type: DataTypes.ENUM("stripe", "paypal", "razorpay", "bank_transfer"),
      allowNull: false,
    },
  },
  {
    tableName: "payments",
    timestamps: false,
  }
);

module.exports = Payment;
