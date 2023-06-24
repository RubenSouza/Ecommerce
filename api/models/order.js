const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
  total: { type: Number, required: true },
  payment_id: { type: String, required: false },
  card_brand: { type: String, required: false },
  card_last4: { type: String, required: false },
});

module.exports = mongoose.model("Order", OrderSchema);
