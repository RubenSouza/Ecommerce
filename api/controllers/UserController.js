const mongoose = require("mongoose");
const User = mongoose.model("User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const UserController = {
  //POST REGISTER

  async register(req, res) {
    const { username, email, password } = req.body;

    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();
    try {
      const user = await User.create({
        username,
        email,
        password: encryptedPassword,
      });

      const { password, ...info } = user._doc;

      return res.json(info);
    } catch (err) {
      console.log(err);
      return res.status(400).send("Registration failed");
    }
  },

  //POST LOGIN

  async login(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.status(401).send("Wrong email or password");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (originalText !== password)
      return res.status(401).send("Wrong email or password");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password: dbPassword, ...info } = user._doc;

    return res.status(200).json({ ...info, accessToken });
  },

  //PUT UPDATE

  async update(req, res, next) {
    const { username, email, password } = req.body;

    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    try {
      let user = await User.findById(req.payload.id);

      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      if (typeof username !== "undefined") {
        user.username = username;
      }
      if (typeof email !== "undefined") {
        user.email = email;
      }
      if (typeof password !== "undefined") {
        user.password = encryptedPassword;
      }

      try {
        let newUser = await user.save();
        const { password, ...info } = newUser._doc;

        return res.status(200).json({ info });
      } catch (error) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
    } catch (error) {
      return res
        .status(401)
        .json({ errors: "Não foi possível salvar o usuário" });
    }
  },

  //DELETE

  async delete(req, res, next) {
    try {
      let user = await User.findById(req.payload.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      return user
        .deleteOne()
        .then(() => {
          return res.json({ deletado: true });
        })
        .catch(next);
    } catch (error) {}
  },

  //GET USER DATA

  async index(req, res, next) {
    try {
      let user = await User.findById(req.payload.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      const { password, ...info } = user._doc;
      return res.json({ info });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  /* ADMIN SECTION */

  //GET /:ID

  async show(req, res, next) {
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      const { password, ...info } = user._doc;
      return res.json({ info });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  //GET /ADMIN

  async getAdmin(req, res, next) {
    let query = req.query.new;
    try {
      let user = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      return res.json({ user });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  //PUT /ADMIN

  async updateAdmin(req, res, next) {
    let { username, email, password, isAdmin } = req.body;

    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }

      if (username) {
        user.username = username;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = encryptedPassword;
      }
      if (isAdmin) {
        user.isAdmin = isAdmin;
      }

      try {
        let newUser = await user.save();
        const { password, ...info } = newUser._doc;

        return res.status(200).json({ info });
      } catch (error) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
    } catch (error) {
      return res
        .status(401)
        .json({ errors: "Não foi possível modificar o usuário" });
    }
  },

  //DELETE /ADMIN

  async deleteAdmin(req, res, next) {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({ errors: "Usuário não registrado" });
    }
    return user
      .deleteOne()
      .then(() => {
        return res.json({ deletado: true });
      })
      .catch(next);
  },
};

module.exports = UserController;
