const Expense = require("../models/expense");

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    if (!expense) {
      res.status(404).send("Expense not found");
    }
    res.status(201).json(expense);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getAllExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    if (!expenses) {
      res.status(404).send("Expense not found");
    }
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!expense) {
      res.status(404).send("Expense not found");
    }
    res.status(200).send("Expense Data deleted successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const editExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount, description, category } = req.body;
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).send("Expense not found");
    }
    expense.amount = amount;
    expense.description = description;
    expense.category = category;
    await expense.save();

    res.status(200).send(`Expense with id: ${id} edited successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addExpense, getAllExpense, deleteExpense, editExpense };
