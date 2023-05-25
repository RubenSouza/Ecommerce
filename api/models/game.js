const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    short_description: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    release_date: { type: Date, required: true },
    cover: { type: String, required: true },
    gallery: [{ type: String, required: true }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    developers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Developer" }],
    publishers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publisher" }],
    platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Platform" }],
    system_requirement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SystemRequirement",
    },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

GameSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Game", GameSchema);
