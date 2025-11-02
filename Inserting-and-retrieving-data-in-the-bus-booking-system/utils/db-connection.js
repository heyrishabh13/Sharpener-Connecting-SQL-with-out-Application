const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "newdb",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connection created successfully");
});

const query = `create table if not exists users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255));
            
              create table if not exists buses (
              id INT AUTO_INCREMENT PRIMARY KEY,
              busNo INT,
              availableSeats INT,
              totalSeats INT);`;

connection.query(query, (err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }
  console.log("Tables created successfully");
});

module.exports = connection;
