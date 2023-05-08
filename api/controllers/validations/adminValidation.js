const mongoose = require("mongoose");
const User = mongoose.model("User");

const adminValidation = {
  async admin(req, res, next) {
    try {
      let user = await User.findById(req.payload.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      if (!user.isAdmin) {
        return res.status(401).json({ errors: "Você não é administrador" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },
};

module.exports = adminValidation;
