const Department = require("../models/department");
const Student = require("../models/student");

const addDepartmentAndStudentTableRecord = async (req, res) => {
  try {
    const department = await Department.create(req.body.department);
    console.log(department.id);
    const student = await Student.create({
      ...req.body.student,
      DepartmentId: department.id,
    });
    res.status(201).json({ department, student });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getDepartmentAndStudentTableRecord = async (req, res) => {
  try {
    const department = await Department.findAll({
      include: Student,
    });
    if (!department) {
      res.status(404).send("Department not found");
    }
    res.status(200).json(department);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addDepartmentAndStudentTableRecord,
  getDepartmentAndStudentTableRecord,
};
