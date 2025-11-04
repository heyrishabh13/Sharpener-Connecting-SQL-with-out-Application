const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("newdb", "root", "123456", {
  root: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    sequelize.authenticate();
    console.log("Database connection establish successfully");
  } catch (error) {
    console.log(error.message);
  }
})();

module.exports = sequelize;
