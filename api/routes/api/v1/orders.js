const router = require("express").Router();
const OrderController = require("../../../controllers/OrderController");
const auth = require("../../auth");

router.get("/", auth.required, OrderController.index);

router.get("/games", auth.required, OrderController.getUniqueGames);

router.post(
  "/intent-payment",
  auth.required,
  OrderController.createPaymentIntent
);
router.post("/", auth.required, OrderController.create);

module.exports = router;
