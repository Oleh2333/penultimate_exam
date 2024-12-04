import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import DoneIcon from '@mui/icons-material/Done';
import TodosGrid from "../TodosGrid/TodosGrid";
import './TodosHeader.css';

export default function TodosHeader() {
  const [reducted, setReducted] = useState(true);
  const [sort, setSort] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={3}>
          <Button
            className="btn"
            variant="contained"
            onClick={() => {
              setReducted(true);
              setSort(false);
            }}
            sx={{
              padding: "8px 12px",
              fontSize: "0.9rem",
              backgroundColor: reducted ? "#000000" : "#333333",
              "&:hover": {
                backgroundColor: "#444444", 
              },
            }}
          >
            <ListAltIcon sx={{ color: "#FFD700", fontSize: "1.4rem" }} /> 
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="btn"
            variant="contained"
            onClick={() => {
              setReducted(false);
              setSort(false);
            }}
            sx={{
              padding: "8px 12px",
              fontSize: "0.9rem",
              backgroundColor: reducted === false && sort === false ? "#000000" : "#333333", 
              "&:hover": {
                backgroundColor: "#444444",
              },
            }}
          >
            <ViewModuleIcon sx={{ color: "#FFD700", fontSize: "1.4rem" }} /> 
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="btn"
            variant="contained"
            onClick={() => {
              setReducted(false);
              setSort(true);
            }}
            sx={{
              padding: "8px 12px",
              fontSize: "0.9rem",
              backgroundColor: sort ? "#000000" : "#333333", 
              "&:hover": {
                backgroundColor: "#444444", 
              },
            }}
          >
            <DoneIcon sx={{ color: "#FFD700", fontSize: "1.4rem" }} /> 
          </Button>
        </Grid>
      </Grid>
      <TodosGrid reducted={reducted} sort={sort} />
    </Box>
  );
}
