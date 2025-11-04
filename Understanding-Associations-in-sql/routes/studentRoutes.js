const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/add", studentController.addDepartmentAndStudentTableRecord);
router.get("/", studentController.getDepartmentAndStudentTableRecord);

module.exports = router;
