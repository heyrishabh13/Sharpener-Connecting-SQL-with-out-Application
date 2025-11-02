const db = require("../utils/db-connection");

const addStudent = (req, res) => {
  const { name, email, age } = req.body;
  const query = `INSERT INTO students (name, email, age) VALUES (?,?,?);`;

  db.execute(query, [name, email, age], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    res.status(201).send("Student data created successfully");
  });
};

const getStudents = (req, res) => {
  const query = `Select * from students`;

  db.execute(query, (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
    }
    res.status(200).send(results);
  });
};

const getStudent = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM students WHERE id = ?;`;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
      return;
    }
    res.status(200).json(result);
  });
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  const query = `UPDATE students SET name = ?, email = ?, age = ? where id = ?;`;

  db.execute(query, [name, email, age, id], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send("Data updated successfully");
  });
};

const deleteStudent = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM students where id = ?;`;

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
    res.status(200).send("Student record deleted successfully");
  });
};

module.exports = {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
