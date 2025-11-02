const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "newdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection establish successfully!");

  const query = `create table students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
  )`;

  connection.execute(query, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table is created");
  });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
