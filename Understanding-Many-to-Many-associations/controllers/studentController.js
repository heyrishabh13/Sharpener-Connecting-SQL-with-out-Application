const Student = require("../models/students");

const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name,
      email,
    });

    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(201).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addStudent,
};
