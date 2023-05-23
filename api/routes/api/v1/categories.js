const router = require("express").Router();
const CategoryController = require("../../../controllers/CategoryController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const categoryValidation = require("../../../controllers/validations/categoryValidation");

router.get("/", CategoryController.index);
router.get(
  "/:id",
  validate(categoryValidation.show, {}, {}),
  CategoryController.show
);
router.post(
  "/",
  auth.required,
  validate(categoryValidation.register, {}, {}),
  adminValidation.admin,
  CategoryController.register
);
router.put(
  "/:id",
  auth.required,
  validate(categoryValidation.update, {}, {}),
  adminValidation.admin,
  CategoryController.update
);
router.delete(
  "/:id",
  auth.required,
  validate(categoryValidation.delete, {}, {}),
  adminValidation.admin,
  CategoryController.delete
);

module.exports = router;
