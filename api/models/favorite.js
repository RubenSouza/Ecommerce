const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const FavoriteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
  },
  {
    timestamps: true,
  }
);

FavoriteSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Favorite", FavoriteSchema);
