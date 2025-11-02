const express = require("express");
const studentController = require("../controller/studentController");

const router = express.Router();

router.post("/", studentController.addStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
