const Department = require("./department");
const Student = require("./student");

// one to many
Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
  Department,
  Student,
};
