const express = require("express");
const db = require("./utils/db-connection");
const userRoutes = require("./routes/userRoutes");
const busesRoutes = require("./routes/busesRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busesRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
