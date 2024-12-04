import { Container, Box, Grid, Typography, Button } from "@mui/material";
import CreateNote from "../../components/CreateNote/CreateNote";
import NotesGrid from "../../components/NotesGrid/NotesGrid";

export default function NotesPage() {
  return (
    <Box sx={{ backgroundColor: "#808080", minHeight: "100vh" }}> 
      <Container sx={{ maxWidth: "lg", marginTop: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            borderRadius: 4,
            boxShadow: 2,
            padding: 3,
          }}
        >

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#FFD700", 
              marginBottom: 2,
              letterSpacing: 1,
              textAlign: "center",
            }}
          >

          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#B0B0B0", 
              marginBottom: 4,
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Create, manage and organize your notes easily.
          </Typography>

          <CreateNote />
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <NotesGrid />
        </Box>
      </Container>
    </Box>
  );
}
