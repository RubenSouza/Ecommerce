const mongoose = require("mongoose");

const HighlightSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
    short_description: { type: String, required: true, unique: true },
    cover: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Highlight", HighlightSchema);
