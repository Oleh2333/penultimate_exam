
const { Todo } = require("../models/todosModel");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ msg: "Todo not found" });
  res.json(todo);
};

const addTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
};

const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!todo) return res.status(404).json({ msg: "Todo not found" });
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).json({ msg: "Todo not found" });
  res.json({ msg: "Todo deleted" });
};

module.exports = { getTodos, getTodoById, addTodo, updateTodo, deleteTodo };
