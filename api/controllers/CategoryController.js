const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const Game = mongoose.model("Game");

const getSort = sortType => {
  switch (sortType) {
    case "a-to-z":
      return { name: 1 };
    case "lowest-price":
      return { price: 1 };
    case "biggest-price":
      return { price: -1 };

    default:
      return {};
  }
};

const CategoryController = {
  /* ADMIN ROUTES */

  //POST REGISTER

  async register(req, res, next) {
    const { name, slug } = req.body;
    try {
      const category = await Category.create({ name, slug });
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //PUT UPDATE

  async update(req, res, next) {
    const { name, slug, games } = req.body;
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      if (name) category.name = name;
      if (slug) category.slug = slug;
      if (games) category.games = games;
      await category.save();
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //DELETE DELETE

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      await category.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  //GET ALL

  async index(req, res, next) {
    try {
      const category = await Category.find();
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //GET BY ID

  async show(req, res, next) {
    const id = req.params.id;
    let category;
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        category = await Category.findOne({ _id: id });
      } else {
        const encodedSlug = encodeURIComponent(id);
        category = await Category.findOne({ slug: encodedSlug });
      }
      if (!category) {
        return res.status(400).json({ error: "Category not found" });
      }
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //GET GAMES BY CATEGORY

  async showGames(req, res, next) {
    const id = req.params.id;
    const price = Number(req.query.price) || 999;
    let category;

    try {
      const objectIdPattern = /^[0-9a-fA-F]{24}$/;

      if (objectIdPattern.test(id)) {
        category = await Category.findOne({ _id: id });
      } else {
        category = await Category.findOne({ slug: id });
      }
      if (!category) {
        return res.status(400).json({ error: "Category not found" });
      }

      const aggregate = Game.aggregate([
        {
          $match: {
            categories: { $in: [new mongoose.Types.ObjectId(category._id)] },
            price: { $lt: price },
          },
        },
        {
          $lookup: {
            from: "developers",
            localField: "developers",
            foreignField: "_id",
            as: "developers",
          },
        },
      ]);

      const options = {
        page: req.query.page || 1,
        limit: 16,
        sort: getSort(req.query.sort),
      };

      const games = await Game.aggregatePaginate(aggregate, options);

      return res.json({ games });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = CategoryController;
