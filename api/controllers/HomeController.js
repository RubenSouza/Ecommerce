const mongoose = require("mongoose");
const Home = mongoose.model("Home");

const HomeController = {
  /* ADMIN ROUTES */

  async register(req, res, next) {
    const { highlights, publishers, showNews } = req.body;
    try {
      const home = await Home.create({
        highlights,
        publishers,
        showNews,
      });
      return res.json({ home });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { highlights, publishers, showNews } = req.body;
    const id = req.params.id;
    console.log(id);
    try {
      const home = await Home.findById(id);
      if (highlights) home.highlights = highlights;
      if (publishers) home.publishers = publishers;
      if (showNews) home.showNews = showNews;
      await home.save();
      return res.json({ home });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const home = await Home.findById(id);
      await home.deleteOne();
      return res.json({ deletado: true });
    } catch (error) {
      next(error);
    }
  },

  /* PUBLIC ROUTES */

  // get index

  async index(req, res, next) {
    try {
      const home = await Home.find()
        .populate("highlights")
        .populate("publishers");
      return res.json({ home });
    } catch (err) {
      next(err);
    }
  },

  // get show

  async show(req, res, next) {
    const id = req.params.id;
    try {
      const home = await Home.findById(id)
        .populate("highlights")
        .populate("publishers");
      return res.json({ home });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = HomeController;
