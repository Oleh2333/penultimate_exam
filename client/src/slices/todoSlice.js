// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   getAllTodos,
//   addTodo,
//   deleteTodo,
//   updateTodo,
// } from "../services/TodosService";

// const fetchTodos = createAsyncThunk("products/fetchTodos", async () => {
//   return getAllTodos();
// });

// const addNewTodo = createAsyncThunk("products/addTodo", async (todo) => {
//   return addTodo(todo);
// });

// const removeTodo = createAsyncThunk("products/deleteTodo", async (id) => {
//   return deleteTodo(id);
// });

// const editTodo = createAsyncThunk("products/updateTodo", async (todo) => {
//   return updateTodo(todo);
// });

// const todoSlice = createSlice({
//   name: "Todos",
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         return action.payload;
//         // state = action.payload
//       })
//       .addCase(addNewTodo.fulfilled, (state, action) => {
//         return [...state, action.payload];
//       })
//       .addCase(removeTodo.fulfilled, (state, action) => {
//         return state.filter((todo) => todo.id !== action.payload);
//       })
//       .addCase(editTodo.fulfilled, (state, action) => {
//         return state.map((todo) =>
//           todo.id == action.payload.id ? action.payload : todo
//         );
//       });
//   },
// });

// export { fetchTodos, addNewTodo, removeTodo, editTodo };

// export default todoSlice.reducer;








import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  getAllTodos,
} from "../services/TodosService";


const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return getAllTodos(); 
});

const addNewTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  return addTodo(todo); 
});

const removeTodo = createAsyncThunk("todos/deleteTodo", async (_id) => {
  await deleteTodo(_id); 
  return _id; 
});

const editTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const updatedTodo = await updateTodo(todo._id, todo); 
  return updatedTodo;
});

const toggleCheckedTodo = createAsyncThunk("todos/toggleCheckedTodo", async (todo) =>{
  const updatedTodo = await updateTodo(todo._id, todo)
  return updatedTodo;
})

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.push(action.payload); 
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        return state.filter((todo) => todo._id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo._id == action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});


export { fetchTodos, addNewTodo, removeTodo, editTodo };
export default todoSlice.reducer;
