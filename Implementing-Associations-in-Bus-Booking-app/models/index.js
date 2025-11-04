const Bookings = require("./booking");
const User = require("./users");
const Bus = require("./bus");

User.hasMany(Bookings, { foreignKey: "userId" });
Bookings.belongsTo(User, { foreignKey: "userId" });

Bus.hasMany(Bookings, { foreignKey: "busId" });
Bookings.belongsTo(Bus, { foreignKey: "busId" });

module.exports = {
  User,
  Bookings,
  Bus,
};
