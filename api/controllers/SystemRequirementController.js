const mongoose = require("mongoose");
const SystemRequirement = mongoose.model("SystemRequirement");

const SystemRequirementController = {
  async index(req, res, next) {
    try {
      const systemRequirements = await SystemRequirement.find();
      return res.json({ systemRequirements });
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    const id = req.params.id;

    try {
      const systemRequirement = await SystemRequirement.findById(id);
      return res.json({ systemRequirement });
    } catch (error) {
      next(error);
    }
  },

  async register(req, res, next) {
    const { minimun, recommended } = req.body;

    try {
      const systemRequirement = await SystemRequirement.create({
        minimun,
        recommended,
      });
      return res.json({ systemRequirement });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const id = req.params.id;
    const { minimun, recommended } = req.body;

    try {
      const systemRequirement = await SystemRequirement.findById(id);

      if (minimun) systemRequirement.minimun = minimun;
      if (recommended) systemRequirement.recommended = recommended;
      await systemRequirement.save();
      return res.json({ systemRequirement });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      const systemRequirement = await SystemRequirement.findById(id);
      await systemRequirement.deleteOne();
      return res.json({ deleted: true });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = SystemRequirementController;
