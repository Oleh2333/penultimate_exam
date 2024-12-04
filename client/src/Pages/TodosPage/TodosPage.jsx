import React from "react";
import { Card, CardHeader, CardContent, Box, Typography, Button, Grid } from "@mui/material";
import CreateTodo from "../../components/CreateTodo/CreateTodo";
import TodosHeader from "../../components/TodosHeader/TodosHeader";
import "./TodosPage.css";

export default function TodosPage() {
  return (
    <Box className="todos-page-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row", 
              maxWidth: "90%",      
              backgroundColor: "#1e1e1e",
              borderRadius: 8,
              padding: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              alignItems: "center",
            }}
            className="todos-card-horizontal"
          >
            <CardContent sx={{ flex: 1 }}>
              <CardHeader
                title={<Typography variant="h6" className="todos-card-header">Todo List</Typography>}
              />
              <CreateTodo />
              <TodosHeader />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}





