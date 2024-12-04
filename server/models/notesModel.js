const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = { Note };
