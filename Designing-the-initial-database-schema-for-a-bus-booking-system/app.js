const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "newdb",
  multipleStatements: true, // ← THIS IS CRUCIAL!
});

connection.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
    return;
  }
  console.log("Connection established successfully");
});

const query = `
  CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
  );

  CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    busId INT,
    seatNumber INT,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (busId) REFERENCES Buses(id)
  );

  CREATE TABLE IF NOT EXISTS Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookingId INT,
    amountPaid INT,
    paymentStatus VARCHAR(255),
    FOREIGN KEY (bookingId) REFERENCES Bookings(id)
  );
`;

connection.query(query, (err, results) => {
  // ← Use query(), not execute()
  if (err) {
    console.error("Error creating tables:", err);
    connection.end();
    return;
  }
  console.log("Tables created successfully");
  connection.end(); // Close connection after setup
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
