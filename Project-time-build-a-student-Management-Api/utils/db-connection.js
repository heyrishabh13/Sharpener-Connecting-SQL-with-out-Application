const mysql = require("mysql2");

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
  console.log("Database connection created successfully");
});

const query = `create table if not exists students (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255) UNIQUE,
                age INT);`;

connection.execute(query, (err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }
  console.log("Student table created successfully");
});

module.exports = connection;
