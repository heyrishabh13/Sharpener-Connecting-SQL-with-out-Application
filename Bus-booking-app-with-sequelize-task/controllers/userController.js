const sequelize = require("../utils/db-connection");
const User = require("../models/users");

const addUserEntry = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(201).send("User data created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while creating user data");
  }
};

const getUsersEntry = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).send("User not found");
    }
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while getting Users data");
  }
};

module.exports = {
  addUserEntry,
  getUsersEntry,
};
