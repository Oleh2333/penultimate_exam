import http from "./HttpCommon"

const getAllNotes = async () => {
  const response = await http.get("/api/notes")
  return response.data
}

const getNoteById = async (id) => {
  const response = await http.get(`/api/notes/${id}`)
  return response.data
}

const addNote = async (note) => {
  const response = await http.post("/api/notes", note)
  return response.data
}

const updateNote = async (id, note) => {
  const response = await http.put(`/api/notes/${id}`, note)
  return response.data
}

const deleteNote = async (id) => {
  await http.delete(`/api/notes/${id}`)
}


export { getAllNotes, addNote, updateNote, deleteNote}


// export {}
