const express = require("express");
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

//Models
const studentModel = require("./models/students");

app.use(express.json());

app.use("/students", studentRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
