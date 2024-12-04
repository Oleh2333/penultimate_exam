import { Button, CardActions } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../slices/todoSlice";
import "./CreateTodo.css";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState({
    id: `${Date.now()}s`,
    title: "",
    isCompleted: false,
    isEditing: false,
  });

  const dispatch = useDispatch();

  return (
    <CardActions className="create-todo-container">
      <input
        type="text"
        value={newTodo.title}
        className="todo-input"
        placeholder="Add new text..."
        onChange={(e) => {
          const title = e.target.value;
          setNewTodo({
            id: `${Date.now()}s`,
            title: title,
            isCompleted: false,
            isEditing: false,
          });
        }}
        style={{
          backgroundColor: "#000000", 
          color: "#FFD700", 
          border: "2px solid #FFD700", 
          padding: "10px", 
          borderRadius: "5px", 
          fontSize: "16px", 
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000000",
          color: "#FFD700", 
          "&:hover": {
            backgroundColor: "#FFD700",
            color: "#000000", 
          },
          padding: "8px 16px", 
        }}
        size="large"
        className="add-button"
        onClick={() => {
          dispatch(addNewTodo(newTodo));
          console.log(newTodo);

          setNewTodo({
            id: `${Date.now()}s`,
            title: "",
            isCompleted: false,
            isEditing: false,
          });
        }}
      >
        Add
      </Button>
    </CardActions>
  );
}
