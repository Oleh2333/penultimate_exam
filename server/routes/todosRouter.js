const express = require("express");
const { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } = require("../controllers/todosController");


const jsonParser = express.json();

const todosRouter = express.Router();

todosRouter.get("/", getTodos);
todosRouter.get("/:id", getTodoById);
todosRouter.post("/",jsonParser, addTodo);
todosRouter.put("/:id",jsonParser, updateTodo);
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter