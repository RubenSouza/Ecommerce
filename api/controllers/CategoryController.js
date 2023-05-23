const mongoose = require("mongoose");
const Category = mongoose.model("Category");

const CategoryController = {
  /* ADMIN ROUTES */

  //POST REGISTER

  async register(req, res) {
    const { name, slug } = req.body;
    try {
      const category = await Category.create({ name, slug });

      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //PUT UPDATE

  async update(req, res) {
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

  async delete(req, res) {
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

  async index(req, res) {
    try {
      const category = await Category.find();
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },

  //GET BY ID

  async show(req, res) {
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      return res.json({ category });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = CategoryController;
