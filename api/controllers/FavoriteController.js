const mongoose = require("mongoose");
const Favorite = mongoose.model("Favorite");
const Game = mongoose.model("Game");

const FavoriteController = {
  async index(req, res, next) {
    const userId = req.payload.id;

    const favorites = await Favorite.findOne({ user: userId }).populate({
      path: "games",
      select: "name cover developers price slug",
      populate: { path: "developers", select: "name" },
    });

    return res.json({ favorites });
  },

  async create(req, res) {
    const userId = req.payload.id;
    const gameId = req.params.gameId;
    try {
      const game = await Game.findById(gameId);
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }

      let favorite = await Favorite.findOne({ user: userId });
      if (!favorite) {
        favorite = new Favorite({ user: userId });
      }

      const gameIndex = favorite.games.indexOf(gameId);
      if (gameIndex !== -1) {
        // Remove o jogo se já estiver favoritado
        favorite.games.splice(gameIndex, 1);
      } else {
        // Adiciona o jogo aos favoritos
        favorite.games.push(gameId);
      }

      await favorite.save();

      return res.status(201).json(favorite);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create favorite" });
    }
  },

  async delete(req, res, next) {
    userId = req.payload.id;

    return res.json({ userId });
  },
};

module.exports = FavoriteController;
