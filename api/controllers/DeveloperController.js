const mongoose = require("mongoose");
const Developer = mongoose.model("Developer");

const DeveloperController = {
  /* ADMIN ROUTES */

  //POST REGISTER

  async register(req, res) {
    const { name, slug } = req.body;
    try {
      const developer = await Developer.create({ name, slug });
      return res.json(developer);
    } catch (error) {
      next(error);
    }
  },

  //PUT UPDATE

  async update(req, res, next) {
    const { name, slug, games } = req.body;
    const id = req.params.id;
    try {
      const developer = await Developer.findById(id);
      if (name) developer.name = name;
      if (slug) developer.slug = slug;
      if (games) developer.games = games;
      await developer.save();
      return res.json(developer);
    } catch (error) {
      next(error);
    }
  },

  //DELETE DELETE

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const developer = await Developer.findById(id);
      await developer.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  //GET INDEX
  async index(req, res) {
    try {
      const developers = await Developer.find();
      return res.json(developers);
    } catch (error) {
      next(error);
    }
  },

  //GET BY ID

  async show(req, res, next) {
    const id = req.params.id;
    try {
      const developer = await Developer.findById(id);
      return res.json(developer);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = DeveloperController;
