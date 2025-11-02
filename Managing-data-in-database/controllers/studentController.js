const db = require("../utils/db-connection");

const addEntry = (req, res) => {
  const { name, email } = req.body;
  const query = `INSERT INTO students (name,email) VALUES (?,?)`;

  db.execute(query, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(201).send(`User with name: ${name} created successfully.`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = `UPDATE students SET name = ?, email = ? where id = ?`;

  db.execute(query, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
    }
    res.status(200).send("Credentials updated successfully");
  });
};

const deleteEntry = (req, res) => {
  const id = req.params.id;
  const query = `DELETE from students where id = ?`;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
      return;
    }
    res.status(200).send("Record deleted successfully");
  });
};

module.exports = {
  addEntry,
  updateEntry,
  deleteEntry,
};
