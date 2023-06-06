const mongoose = require("mongose");

const HomeSchema = new mongoose.Schema(
  {
    highlights: [
      {
        title: { type: String, required: true, unique: false },
        highlight: { type: mongoose.Schema.Types.ObjectId, ref: "Highlight" },
      },
    ],
    developers: [
      {
        name: { type: String, required: true, unique: false },
        developer: { type: mongoose.Schema.Types.ObjectId, ref: "Developer" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Home", HomeSchema);
