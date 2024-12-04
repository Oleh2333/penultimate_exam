const { Note } = require("../models/notesModel")

const getNotes = async (req, res) =>{
    const notes = await Note.find()
    res.json(notes)
}

const getNoteById = async (req, res) => {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({msg: "Note not found"})
    res.json(note)
}

const addNote = async (req, res) => {
    const newNote = new Note(req.body)
    await newNote.save()
    res.json(newNote)
}

const updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!note) return res.status(404).json({msg: "Note not found"})
    res.json(note)
}

const deleteNote = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    if(!note) return res.status(404).json({msg: "Note not found"})
    res.json({msg: "Note deleted"})
}

module.exports = {
    getNotes,
    getNoteById,
    addNote,
    updateNote,
    deleteNote
}