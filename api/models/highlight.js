const mongoose = require("mongoose");

const HighlightSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: false },
    link: { type: String, required: true, unique: false },
    short_description: { type: String, required: true, unique: false },
    cover: { type: String, required: true, unique: false },
    badge: { type: String, required: true, unique: false },
    badge_color: { type: String, required: true, unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Highlight", HighlightSchema);
