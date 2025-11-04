const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("newdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection establish successfully");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
