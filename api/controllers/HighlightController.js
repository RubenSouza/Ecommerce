const mongoose = require("mongoose");
const Highlight = mongoose.model("Highlight");

const HighlightController = {
  /* ADMIN ROUTES */

  async register(req, res, next) {
    const { name, link, short_description, cover } = req.body;
    try {
      const highlight = await Highlight.create({
        name,
        link,
        short_description,
        cover,
      });
      return res.json({ highlight });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { name, link, short_description, cover } = req.body;
    const id = req.params.id;
    try {
      const highlight = await Highlight.findById(id);
      if (name) highlight.name = name;
      if (link) highlight.link = link;
      if (short_description) highlight.short_description = short_description;
      if (cover) highlight.cover = cover;
      await highlight.save();
      return res.json({ highlight });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const highlight = await Highlight.findById(id);
      await highlight.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  // get index

  async index(req, res, next) {
    try {
      const highlights = await Highlight.find();
      return res.json({ highlights });
    } catch (err) {
      next(err);
    }
  },

  // get show

  async show(req, res, next) {
    const id = req.params.id;
    try {
      const highlight = await Highlight.findById(id);
      return res.json({ highlight });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = HighlightController;
