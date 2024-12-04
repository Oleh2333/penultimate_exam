import http from "./HttpCommon";

const getAllTodos = async () => {
  const response = await http.get("/api/todos");
  return response.data;
};

const addTodo = async (todo) => {
  const response = await http.post("/api/todos", todo);
  return response.data;
}

const deleteTodo = async (id) => {
  const response = await http.delete(`/api/todos/${id}`);
  return response.data;
}

const updateTodo = async (_id, todo) => {
  const response = await http.put(`/api/todos/${_id}`, todo);
  return response.data;
}


export { getAllTodos, addTodo, deleteTodo, updateTodo};
