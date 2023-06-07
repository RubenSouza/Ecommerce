const mongoose = require("mongoose");
const Highlight = mongoose.model("Highlight");

const HighlightController = {
  /* ADMIN ROUTES */
  async register(req, res, next) {
    const { title, link, short_description, cover, badge, badge_color } =
      req.body;
    try {
      const highlight = await Highlight.create({
        title,
        link,
        short_description,
        cover,
        badge,
        badge_color,
      });
      return res.json({ highlight });
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    const { title, link, short_description, cover, badge, badge_color } =
      req.body;
    const id = req.params.id;
    try {
      const highlight = await Highlight.findById(id);
      if (title) highlight.title = title;
      if (link) highlight.link = link;
      if (short_description) highlight.short_description = short_description;
      if (cover) highlight.cover = cover;
      if (badge) highlight.badge = badge;
      if (badge_color) highlight.badge_color = badge_color;
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
