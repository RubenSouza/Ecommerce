const router = require("express").Router();
const CategoryController = require("../../../controllers/CategoryController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const CategoryValidation = require("../../../controllers/validations/categoryValidation");

router.get("/", CategoryController.index);
router.get(
  "/:id",
  validate(CategoryValidation.show, {}, {}),
  CategoryController.show
);
router.post(
  "/",
  auth.required,
  validate(CategoryValidation.register, {}, {}),
  adminValidation.admin,
  CategoryController.register
);
router.put(
  "/:id",
  auth.required,
  validate(CategoryValidation.update, {}, {}),
  adminValidation.admin,
  CategoryController.update
);
router.delete(
  "/:id",
  auth.required,
  validate(CategoryValidation.delete, {}, {}),
  adminValidation.admin,
  CategoryController.delete
);

module.exports = router;
