const sequelize = require("../utils/db-connection");
const Student = require("../models/students");

const addStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const student = await Student.create({
      name,
      email,
      age,
    });

    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(201).send("Student data created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while updating data");
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    if (!students) {
      res.status(404).send("Student not found");
    }
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).send("Student data can't be get");
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while display the single student data");
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age } = req.body;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    student.name = name;
    student.email = email;
    student.age = age;
    await student.save();
    res.status(200).send("Student data updated successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(200).send("Student data deleted successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
