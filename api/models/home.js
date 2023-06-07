const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema(
  {
    highlights: [
      {
        title: { type: String, required: true, unique: false },
        highlight: { type: mongoose.Schema.Types.ObjectId, ref: "Highlight" },
      },
    ],
    publishers: [
      {
        name: { type: String, required: true, unique: false },
        publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
      },
    ],
    showNews: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Home", HomeSchema);
