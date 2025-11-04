const express = require("express");
const courseController = require("../controllers/courseController");

const router = express.Router();

router.post("/add", courseController.addCourses);
router.get("/addStudentCourses", courseController.addStudentsToCourses);

module.exports = router;
