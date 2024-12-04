// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   getAllNotes,
//   addNote,
//   updateNote,
//   deleteNote,
// } from "../services/notesService";

// const fetchNotes = createAsyncThunk("products/fetchNotes", async () => {
//   return getAllNotes();
// });

// const addNewNote = createAsyncThunk("products/addNote", async (note) => {
//   return addNote(note);
// });

// const editNote = createAsyncThunk("products/updateNote", async (note) => {
//   return updateNote(note.id, note);
// });

// const removeNote = createAsyncThunk("products/deleteNote", async (id) => {
//   return deleteNote(id);
// });
// // const notes = []
  
// //  fetch('http://localhost:3000/notes').then((response) =>response.json()).then((data) => {
// //   notes = data.notes;
// // })

// // const initialState = {
// //   notes: notes
// // }

// // const filterNotes = (state, action) =>{

// // }

// const notestSlice = createSlice({
//   name: "notes",
//   initialState: [],
//   reducers: {
//     filterNotes: (state, action)=>{
//        state.filter((note) => note.name.toLowerCase().includes(action.payload.toLowerCase()))
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNotes.fulfilled, (state, action) => {
//         return action.payload;
//         // state = action.payload
//       })
//       .addCase(addNewNote.fulfilled, (state, action) => {
//         return [...state, action.payload];
//       })
//       .addCase(editNote.fulfilled, (state, action) => {
//         return state.map((note) =>
//           note.id === action.payload.id ? action.payload : note
//         );
//       })
//       .addCase(removeNote.fulfilled, (state, action) => {
//         return state.filter((note) => note.id !== action.payload);
//       });
//   },
// });

// export { fetchNotes, addNewNote, editNote, removeNote };
// export const { filterNotes } = notestSlice.actions
// export default notestSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
} from "../services/notesService";

const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  return getAllNotes();
});

const addNewNote = createAsyncThunk("notes/addNote", async (note) => {
  return addNote(note);
});

const editNote = createAsyncThunk("notes/updateNote", async (note) => {
  return updateNote(note.id, note);
});

const removeNote = createAsyncThunk("notes/deleteNote", async (id) => {
  await deleteNote(id);
  return id;
});

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState.notes, 
  reducers: {
    filterNotes: (state, action) => {
      return state.filter((note) =>
        note.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewNote.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editNote.fulfilled, (state, action) => {
        const index = state.findIndex((note) => note._id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(removeNote.fulfilled, (state, action) => {
        return state.filter((note) => note._id !== action.payload);
      });
  },
});

export { fetchNotes, addNewNote, editNote, removeNote };
export const { filterNotes } = notesSlice.actions;
export default notesSlice.reducer;
