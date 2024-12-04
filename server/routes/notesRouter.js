const express = require("express");
const {
  getNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

const jsonParser = express.json();

const notesRouter = express.Router();

notesRouter.get("/", getNotes);
notesRouter.get("/:id", getNoteById);
notesRouter.post("/",jsonParser, addNote);
notesRouter.put("/:id",jsonParser, updateNote);
notesRouter.delete("/:id", deleteNote);

module.exports = notesRouter