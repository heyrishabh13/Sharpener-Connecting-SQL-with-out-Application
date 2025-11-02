const db = require("../utils/db-connection");

const addUser = (req, res) => {
  const { name, email } = req.body;
  const query = `INSERT INTO users (name, email) VALUES (?, ?);`;
  db.execute(query, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    res.status(201).send("User created successfully");
  });
};

const getUsers = (req, res) => {
  const query = `Select * from users;`;

  db.execute(query, (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(results);
  });
};

module.exports = {
  addUser,
  getUsers,
};
