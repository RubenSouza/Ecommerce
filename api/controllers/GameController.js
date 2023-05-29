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
    const id = req.params.id;

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
      system_requirement: system_requirement_update,
      is_active,
    } = req.body;

    try {
      const game = await Game.findById(id);

      if (!game) return res.status(400).json({ error: "Game not found" });

      const systemRequirement = await SystemRequirement.findById(
        game.system_requirement
      );

      if (system_requirement_update) {
        await systemRequirement.updateOne({
          ...system_requirement_update,
        });
      }

      if (name) game.name = name;
      if (slug) game.slug = slug;
      if (short_description) game.short_description = short_description;
      if (description) game.description = description;
      if (price) game.price = price;
      if (rating) game.rating = rating;
      if (release_date) game.release_date = release_date;
      if (cover) game.cover = cover;
      if (gallery) game.gallery = gallery;

      if (categories_id) {
        const categories = await Category.find({
          _id: game.categories,
        });

        categories.map(async category => {
          await category.updateOne({
            $pull: { games: game._id },
          });
        });

        const newCategories = await Category.find({
          _id: { $in: categories_id },
        });

        newCategories.map(async newCategory => {
          await newCategory.updateOne({
            $addToSet: { games: game._id },
          });
        });

        game.categories = categories_id;
      }

      if (developers_id) {
        const developers = await Developer.find({ _id: game.developers });

        developers.map(async developer => {
          await developer.updateOne({
            $pull: { games: game._id },
          });
        });

        const newDevelopers = await Developer.find({ _id: developers_id });

        newDevelopers.map(async developer => {
          await developer.updateOne({
            $addToSet: { games: game._id },
          });
        });

        game.developers = developers_id;
      }

      if (publishers_id) {
        const publishers = await Publisher.find({ _id: game.publishers });

        publishers.map(async publisher => {
          await publisher.updateOne({
            $pull: { games: game._id },
          });
        });

        const newPublishers = await Publisher.find({ _id: publishers_id });

        newPublishers.map(async publisher => {
          await publisher.updateOne({
            $addToSet: { games: game._id },
          });
        });

        game.publishers = publishers_id;
      }

      if (platforms_id) {
        const platforms = await Platform.find({ _id: game.platforms });

        platforms.map(async platform => {
          await platform.updateOne({
            $pull: { games: game._id },
          });
        });

        const newPlatforms = await Platform.find({ _id: platforms_id });

        newPlatforms.map(async platform => {
          await platform.updateOne({
            $addToSet: { games: game._id },
          });
        });

        game.platforms = platforms_id;
      }

      if (is_active) game.is_active = is_active;

      await game.save();

      return res.json({ game });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      const game = await Game.findById(id);

      const categories = await Category.find({ _id: game.categories });

      categories.map(async category => {
        await category.updateOne({
          $pull: { games: game._id },
        });
      });

      const developers = await Developer.find({ _id: game.developers });

      developers.map(async developer => {
        await developer.updateOne({
          $pull: { games: game._id },
        });
      });

      const publishers = await Publisher.find({ _id: game.publishers });

      publishers.map(async publisher => {
        await publisher.updateOne({
          $pull: { games: game._id },
        });
      });

      const platforms = await Platform.find({ _id: game.platforms });

      platforms.map(async platform => {
        await platform.updateOne({
          $pull: { games: game._id },
        });
      });

      const systemRequirement = await SystemRequirement.findById(
        game.system_requirement
      );

      if (systemRequirement) await systemRequirement.deleteOne();

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
      limit: 20,
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
    const { id } = req.params;
    let game;

    try {
      // Verificar se o parâmetro é um ID válido (formato ObjectId)
      if (mongoose.Types.ObjectId.isValid(id)) {
        // Consulta por ID
        game = await Game.findOne({ _id: id });
      } else {
        // Consulta por slug
        game = await Game.findOne({ slug: id });
      }

      if (!game) {
        return res.status(400).json({ error: "Game not found" });
      }

      return res.json({ game });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = GameController;
