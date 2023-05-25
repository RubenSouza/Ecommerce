const mongoose = require("mongoose");
const Game = mongoose.model("Game");
const Category = mongoose.model("Category");
const Developer = mongoose.model("Developer");
const Publisher = mongoose.model("Publisher");
const Platform = mongoose.model("Platform");
const SystemRequirement = mongoose.model("SystemRequirement");

const GameController = {
  /* ADMIN ROUTES */

  // post register

  async register(req, res, next) {
    const {
      name,
      slug,
      short_description,
      description,
      price,
      rating,
      release_date,
      cover,
      gallery,
      categories: categories_id,
      developers: developers_id,
      publishers: publishers_id,
      platforms: platforms_id,
      system_requirement: system_requirement_create,
      is_active,
    } = req.body;

    try {
      const systemRequirement = await SystemRequirement.create({
        ...system_requirement_create,
      });

      const system_requirement_id = systemRequirement._id;

      const game = await Game.create({
        name,
        slug,
        short_description,
        description,
        price,
        rating,
        release_date,
        cover,
        gallery,
        categories: categories_id,
        developers: developers_id,
        publishers: publishers_id,
        platforms: platforms_id,
        system_requirement: system_requirement_id,
        is_active,
      });

      const categories = await Category.find({ _id: categories_id });

      categories.map(async category => {
        await category.updateOne({ games: [...category.games, game._id] });
      });

      const developers = await Developer.find({ _id: developers_id });

      developers.map(async developer => {
        await developer.updateOne({ games: [...developer.games, game._id] });
      });

      const publishers = await Publisher.find({ _id: publishers_id });

      publishers.map(async publisher => {
        await publisher.updateOne({ games: [...publisher.games, game._id] });
      });

      const platforms = await Platform.find({ _id: platforms_id });

      platforms.map(async platform => {
        await platform.updateOne({ games: [...platform.games, game._id] });
      });

      return res.json({ game });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    return;
  },

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      const game = await Game.findById(id);

      const categories = await Category.find({ _id: game.categories });

      categories.map(async category => {
        await category.updateOne({
          games: category.games.filter(game_id => game_id != id),
        });
      });

      const developers = await Developer.find({ _id: game.developers });

      developers.map(async developer => {
        await developer.updateOne({
          games: developer.games.filter(game_id => game_id != id),
        });
      });

      const publishers = await Publisher.find({ _id: game.publishers });

      publishers.map(async publisher => {
        await publisher.updateOne({
          games: publisher.games.filter(game_id => game_id != id),
        });
      });

      const platforms = await Platform.find({ _id: game.platforms });

      platforms.map(async platform => {
        await platform.updateOne({
          games: platform.games.filter(game_id => game_id != id),
        });
      });

      await game.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  //get index

  async index(req, res, next) {
    const myAggregate = Game.aggregate();
    const options = {
      page: req.query.page || 1,
      limit: 10,
    };
    try {
      const games = await Game.aggregatePaginate(myAggregate, options);
      return res.json({ games });
    } catch (error) {
      next(error);
    }
  },

  //get show

  async show(req, res, next) {
    const id = req.params.id;

    try {
      const game = await Game.findById(id);

      return res.json({ game });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = GameController;
