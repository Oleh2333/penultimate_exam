// import { Box, CssBaseline, Toolbar } from "@mui/material";
// import "./App.css";
// import Header from "./components/Header/Header";
// import { Route, Routes } from "react-router-dom";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import NotesPage from "./Pages/NotesPage/NotesPage";
// import TodosPage from "./Pages/TodosPage/TodosPage";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//         <p>some text</p>
//         <Routes>
//           <Route path="/" element={<AboutPage />} />
//           <Route path="/notes" element={<NotesPage />} />
//           <Route path="/todos" element={<TodosPage />} />
//         </Routes>
//       </Box>
//     </>
//   );
// }

// export default App;




import { Box, CssBaseline, Toolbar } from "@mui/material"
import "./App.css"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage/HomePage"
import NotesPage from "./Pages/NotesPage/NotesPage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import TodosPage from "./Pages/TodosPage/TodosPage"
// import NotesPage from "./pages/NotesPage/NotesPage"

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App