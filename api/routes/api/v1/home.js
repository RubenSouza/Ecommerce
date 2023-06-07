const router = require("express").Router();
const HomeController = require("../../../controllers/HomeController");
const HomeValidation = require("../../../controllers/validations/homeValidation");
const auth = require("../../auth");
const adminValidation = require("../../../controllers/validations/adminValidation");

const { validate } = require("express-validation");

router.get("/", HomeController.index);

router.get("/:id", HomeController.show);

router.post(
  "/",
  auth.required,
  validate(HomeValidation.register, {}, {}),
  adminValidation.admin,
  HomeController.register
);

router.put(
  "/:id",
  auth.required,
  validate(HomeValidation.update, {}, {}),
  adminValidation.admin,
  HomeController.update
);

router.delete(
  "/:id",
  auth.required,
  validate(HomeValidation.update, {}, {}),
  adminValidation.admin,
  HomeController.delete
);

module.exports = router;
