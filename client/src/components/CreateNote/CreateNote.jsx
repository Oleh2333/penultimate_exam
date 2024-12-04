import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../../slices/notesSlice";
import { Button, Grid, Paper } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import "./CreateNote.css";

export default function CreateNote() {
  const [noteText, setNoteText] = useState("");
  const [noteName, setNoteName] = useState("");
  const [note, setNote] = useState({
    id: `${Date.now()}`,
    text: "",
    color: "#FFEB3B", 
    name: "",
  });
  const [color, setColor] = useState("#FFEB3B");
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setNote({
      id: `${Date.now()}`,
      text: noteText,
      color: color,
      name: noteName,
    });

    setIsValid(noteName.trim() !== "" && noteText.trim() !== "");
  }, [noteName, noteText, color]);

  const handleChangeNoteText = (e) => setNoteText(e.target.value);
  const handleChangeNoteName = (e) => setNoteName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewNote(note));
    setNoteText("");
    setNoteName("");
  };

  return (
    <div className="create-note-container">
      <h2 className="heading">Create a New Note</h2>
      <Paper elevation={3} className="note-form-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} className="color-picker-container">
            <h3 className="subheading">Choose a color</h3>
            <HexColorPicker color={color} onChange={setColor} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="note-input"
                  value={noteName}
                  onChange={handleChangeNoteName}
                  placeholder="Enter..."
                />
              </div>
              <div className="input-group">
                <textarea
                  value={noteText}
                  onChange={handleChangeNoteText}
                  className="note-textarea"
                  placeholder="Enter..."
                  rows={6}
                />
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  type="submit"
                  className="submit-btn"
                  disabled={!isValid}
                >
                  Add
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
