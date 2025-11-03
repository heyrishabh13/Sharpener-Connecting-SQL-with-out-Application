const User = require("../model/user");

const addUser = async (req, res) => {
  try {
    const { username, email, number } = req.body;
    const user = await User.create({
      username,
      email,
      number,
    });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: while adding user data");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).send("User not found");
    }
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status("Error: Cannot get users data");
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).send("User record deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: User data cannot be deleted");
  }
};

module.exports = {
  addUser,
  getAllUsers,
  deleteUser,
};
