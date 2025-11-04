const Course = require("./courses");
const Student = require("./students");
const StudentCourses = require("./studentCourses");

Student.belongsToMany(Course, { through: StudentCourses });
Course.belongsToMany(Student, { through: StudentCourses });

module.exports = {
  Student,
  Course,
  StudentCourses,
};
