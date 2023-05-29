const router = require("express").Router();
const GameController = require("../../../controllers/GameController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const GameValidation = require("../../../controllers/validations/gameValidation");

router.get("/", GameController.index);
router.get("/:id", validate(GameValidation.show, {}, {}), GameController.show);

router.post(
  "/",
  auth.required,
  validate(GameValidation.register, {}, {}),
  adminValidation.admin,
  GameController.register
);
router.put(
  "/:id",
  auth.required,
  validate(GameValidation.update, {}, {}),
  adminValidation.admin,
  GameController.update
);
router.delete(
  "/:id",
  auth.required,
  validate(GameValidation.delete, {}, {}),
  adminValidation.admin,
  GameController.delete
);

module.exports = router;
