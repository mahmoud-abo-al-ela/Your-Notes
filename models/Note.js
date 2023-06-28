import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Note", NoteSchema);
