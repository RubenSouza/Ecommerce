const mongoose = require("mongoose");
const Publisher = mongoose.model("Publisher");

const PublisherController = {
  /* ADMIN ROUTES */

  //POST REGISTER

  async register(req, res, next) {
    const { name, slug } = req.body;

    try {
      const publisher = await Publisher.create({ name, slug });
      return res.json({ publisher });
    } catch (error) {
      next(error);
    }
  },

  //PUT UPDATE

  async update(req, res, next) {
    const { name, slug, games } = req.body;
    const id = req.params.id;

    try {
      const publisher = await Publisher.findById(id);
      if (name) publisher.name = name;
      if (slug) publisher.slug = slug;
      if (games) publisher.games = games;
      await publisher.save();
      return res.json({ publisher });
    } catch (error) {}
  },

  //DELETE DELETE

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      const publisher = await Publisher.findById(id);
      await publisher.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  //GET INDEX
  async index(req, res, next) {
    try {
      const publishers = await Publisher.find();
      return res.json({ publishers });
    } catch (error) {
      next(error);
    }
  },

  //GET SHOW

  async show(req, res, next) {
    const id = req.params.id;
    try {
      const publisher = await Publisher.findById(id).populate([
        "games",
        {
          path: "games",
          populate: {
            path: "publishers",
            model: "Publisher",
          },
        },
      ]);
      return res.json({ publisher });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = PublisherController;
