import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, fetchTodos, removeTodo } from "../../slices/todoSlice";
import { Button, CardContent, Grid, Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./TodosGrid.css";

export default function TodosGrid({ sort, reducted }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggleCompletion = (todo) => {
    dispatch(
      editTodo({
        ...todo,
        isCompleted: !todo.isCompleted,
      })
    );
  };

  return (
    <CardContent>
      {reducted
        ? todos.map((todo) => (
            <Box
              key={todo._id}
              className="todo-item"
              sx={{
                marginBottom: 2,
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: "#f9f9f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                  {todo.isCompleted ? (
                    <CheckCircleOutlineIcon
                      color="primary"
                      onClick={() => handleToggleCompletion(todo)}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <RadioButtonUncheckedIcon
                      color="primary"
                      onClick={() => handleToggleCompletion(todo)}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
                </Grid>
                <Grid item xs={8}>
                  <span className={todo.isCompleted ? "completed" : ""}>
                    {todo.title}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    onClick={() => {
                      dispatch(removeTodo(todo._id));
                    }}
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000000", 
                      color: "#FFD700", 
                      "&:hover": {
                        backgroundColor: "#FFD700", 
                        color: "#000000", 
                      },
                    }}
                    className="remove-button"
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))
        : ""}

      {reducted === false && sort === true &&
        todos.filter(todo => todo.isCompleted).map((todo) => (
          <Box
            key={todo._id}
            className="todo-item"
            sx={{
              marginBottom: 2,
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                {todo.isCompleted ? (
                  <CheckCircleOutlineIcon
                    color="primary"
                    onClick={() => handleToggleCompletion(todo)}
                    sx={{ cursor: "pointer" }}
                  />
                ) : (
                  <RadioButtonUncheckedIcon
                    color="primary"
                    onClick={() => handleToggleCompletion(todo)}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </Grid>
              <Grid item xs={8}>
                <span className="completed">{todo.title}</span>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    dispatch(removeTodo(todo._id));
                  }}
                  variant="outlined"
                  sx={{
                    backgroundColor: "#000000", 
                    color: "#FFD700", 
                    "&:hover": {
                      backgroundColor: "#FFD700", 
                      color: "#000000", 
                    },
                  }}
                  className="remove-button"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}

      {reducted === false && sort === false &&
        todos.filter(todo => !todo.isCompleted).map((todo) => (
          <Box
            key={todo._id}
            className="todo-item"
            sx={{
              marginBottom: 2,
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                {todo.isCompleted ? (
                  <CheckCircleOutlineIcon
                    color="primary"
                    onClick={() => handleToggleCompletion(todo)}
                    sx={{ cursor: "pointer" }}
                  />
                ) : (
                  <RadioButtonUncheckedIcon
                    color="primary"
                    onClick={() => handleToggleCompletion(todo)}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </Grid>
              <Grid item xs={8}>
                <span>{todo.title}</span>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    dispatch(removeTodo(todo._id));
                  }}
                  variant="outlined"
                  sx={{
                    backgroundColor: "#000000", 
                    color: "#FFD700", 
                    "&:hover": {
                      backgroundColor: "#FFD700", 
                      color: "#000000", 
                    },
                  }}
                  className="remove-button"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
    </CardContent>
  );
}
