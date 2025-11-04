const Courses = require("../models/courses");
const Student = require("../models/students");

const addCourses = async (req, res) => {
  try {
    const course = await Courses.create(req.body);
    if (!course) {
      res.status(404).send("Course not found");
    }
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addStudentsToCourses = async (req, res) => {
  const { studentId, courseIds } = req.body;

  const student = await Student.findByPk(studentId);
  const courses = await Courses.findAll({
    where: {
      id: courseIds,
    },
  });

  await student.addCourses(courses);

  const updatedStudent = await Student.findByPk(studentId, {
    include: Courses,
  });

  res.status(200).json(updatedStudent);
};

module.exports = {
  addCourses,
  addStudentsToCourses,
};
