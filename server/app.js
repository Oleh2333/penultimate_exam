const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRouter = require("./routes/notesRouter");
const { URL, PORT } = require("./config/config");
const todosRouter = require("./routes/todosRouter");
const app = express();

app.use(cors());

app.use("/api/notes", notesRouter);
app.use('/api/todos', todosRouter)

const main = async () => {
  try {
    mongoose.connect(URL).then(() => console.log("Connected to MongoDB"));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // eslint-disable-line no-console
    });
  } catch {
    console.error(error);
    process.exit(1)
  }
};

main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
