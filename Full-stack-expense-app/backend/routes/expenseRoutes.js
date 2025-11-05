const express = require("express");
const expenseController = require("../controller/expenseController");

const router = express.Router();

router.post("/", expenseController.addExpense);
router.get("/", expenseController.getAllExpense);
router.delete("/:id", expenseController.deleteExpense);
router.put("/:id", expenseController.editExpense);

module.exports = router;
