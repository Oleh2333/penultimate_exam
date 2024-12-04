import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, removeNote } from "../../slices/notesSlice";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import './NotesGrid.css';

export default function NotesGrid() {
  const notes = useSelector((state) => state.notes);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [notes, searchText]);

  const filterData = (text) => {
    setSearchText(text);
  };

  const handleDelete = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div className="notes-grid-container">
      <div className="search-container">
        <h2 className="center gold-text">Search for a note</h2>
        <div className="search-input-container">
        <input
  type="text"
  placeholder="Search"
  onChange={(e) => filterData(e.target.value)}
  value={searchText}
  className="search-input"
/>

          <span className="material-icons search-icon">search</span> 
        </div>
      </div>

      <ul className="notes-list">
        {filteredNotes.map((note) => (
          <li
            key={note._id}
            className="note-item"
            style={{
              backgroundColor: note.color || "#FFD700", 
              borderRadius: "8px",
              padding: "15px",
              margin: "10px 0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid #FFD700", 
              color: "#212121", 
            }}
          >
            <span className="note-content">{note.name} | {note.text}</span>
            <Button
              variant="contained"
              size="small"
              className="delete-btn"
              onClick={() => handleDelete(note._id)}
              sx={{
                backgroundColor: "#000000",
                color: "#FFD700", 
                "&:hover": {
                  backgroundColor: "#FFD700", 
                  color: "#000000", 
                },
              }}
            >
              Delete <span className="material-icons" style={{ fontSize: "inherit" }}>clear</span> 
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
