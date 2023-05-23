const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Publisher", PublisherSchema);
