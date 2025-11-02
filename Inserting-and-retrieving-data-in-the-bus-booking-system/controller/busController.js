const db = require("../utils/db-connection");

const addBus = (req, res) => {
  const { busNo, availableSeats, totalSeats } = req.body;
  const query = `INSERT INTO buses (busNo, availableSeats,totalSeats) VALUES (?, ?,?);`;

  db.execute(query, [busNo, availableSeats, totalSeats], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
    res.status(201).send("Bus Data added successfully");
  });
};

const getBusesWithSpecifiedNumberOfSeats = (req, res) => {
  const seats = req.params.seats;
  const query = `Select busNo from buses where availableSeats > ?`;

  db.execute(query, [seats], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Record not found");
      return;
    }
    res.status(200).send({ result });
  });
};

module.exports = {
  addBus,
  getBusesWithSpecifiedNumberOfSeats,
};
