const express = require("express");
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");

//models
require("./models");

const app = express();

app.use(express.json());

app.use("/student", studentRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
