const express = require("express");
const db = require("./utils/db-connection");
const busRoutes = require("./routes/busRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/buses", busRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});
