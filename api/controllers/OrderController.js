const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const Game = mongoose.model("Game");
const User = mongoose.model("User");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const OrderController = {
  async index(req, res, next) {
    const user = req.payload.id;
    return res.send({ ok: true, user });
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
