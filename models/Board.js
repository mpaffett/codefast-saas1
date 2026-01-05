import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  columns: [{ title: String, tasks: [{ title: String, description: String }] }],
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
