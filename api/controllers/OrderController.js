const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const Game = mongoose.model("Game");
const User = mongoose.model("User");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const OrderController = {
  async index(req, res, next) {
    const user = req.payload.id;
    try {
      const orders = await Order.find({ user })
        .populate("games")
        .sort({ createdAt: -1 });
      return res.json({ orders });
    } catch (error) {
      next(error);
    }
  },

  async getUniqueGames(req, res, next) {
    const user = req.payload.id;
    const { page } = req.query || 1;
    const limit = 20;

    try {
      // Obter todas as orders do usuário
      const orders = await Order.find({ user }).populate("games");

      // Criar uma lista única de jogos sem repetição
      const uniqueGames = [];
      orders.forEach(order => {
        order.games.forEach(game => {
          const isGameExists = uniqueGames.some(uniqueGame =>
            uniqueGame._id.equals(game._id)
          );
          if (!isGameExists) {
            uniqueGames.push(game);
          }
        });
      });

      // Ordenar a lista de jogos por data de criação
      uniqueGames.sort((a, b) => b.createdAt - a.createdAt);

      // Calcular o total de páginas e a posição inicial
      const totalPages = Math.ceil(uniqueGames.length / limit);
      const startIndex = (page - 1) * limit;

      // Obter os jogos da página atual
      const games = uniqueGames.slice(startIndex, startIndex + limit);

      return res.json({
        games,
        totalGames: uniqueGames.length,
        totalPages,
      });
    } catch (error) {
      next(error);
    }
  },

  async createPaymentIntent(req, res, next) {
    const user = req.payload.id;
    const { games } = req.body;
    try {
      const gameList = await Game.find({ _id: { $in: games } });
      const userFound = await User.findById(user);
      if (!userFound) return res.status(400).send({ error: "User not found" });
      const amount = gameList.reduce((acc, game) => acc + game.price, 0);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number((amount * 100).toFixed(0)),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return res.json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    const user = req.payload.id;
    const { games, payment_id, payment_method } = req.body;
    try {
      const gameList = await Game.find({ _id: { $in: games } });
      const userFound = await User.findById(user);
      if (!userFound) return res.status(400).send({ error: "User not found" });
      const paymentIntent = await stripe.paymentIntents.retrieve(payment_id);
      const paymentMethod = await stripe.paymentMethods.retrieve(
        payment_method
      );

      const order = await Order.create({
        user,
        games: gameList,
        total: paymentIntent.amount / 100,
        payment_id,
        card_brand: paymentMethod.card.brand,
        card_last4: paymentMethod.card.last4,
      });

      return res.json({ order });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = OrderController;
