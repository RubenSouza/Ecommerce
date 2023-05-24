const mongoose = require("mongoose");
const Platform = mongoose.model("Platform");

const PlatformController = {
  /* ADMIN ROUTES */

  //POST REGISTER

  async register(req, res, next) {
    const { name, slug } = req.body;

    try {
      const platform = await Platform.create({ name, slug });
      return res.json({ platform });
    } catch (error) {
      next(error);
    }
  },

  //PUT UPDATE

  async update(req, res, next) {
    const id = req.params.id;
    const { name, slug, games } = req.body;

    try {
      const platform = await Platform.findById(id);

      if (name) platform.name = name;
      if (slug) platform.slug = slug;
      if (games) platform.games = games;
      await platform.save();
      return res.json({ platform });
    } catch (error) {
      next(error);
    }
  },

  //DELETE DELETE

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      const platform = await Platform.findById(id);
      await platform.deleteOne();
      return res.json({ deleted: true });
    } catch (error) {}
  },

  /* PUBLIC ROUTES */

  //GET INDEX

  async index(req, res, next) {
    try {
      const platforms = await Platform.find();
      return res.json({ platforms });
    } catch (error) {
      next(error);
    }
  },

  //GET SHOW

  async show(req, res, next) {
    const id = req.params.id;

    try {
      const platform = await Platform.findById(id);
      return res.json({ platform });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = PlatformController;
