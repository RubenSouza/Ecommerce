const router = require("express").Router();
const UserController = require("../../../controllers/UserController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const UserValidation = require("../../../controllers/validations/userValidation");

//client routes

router.post(
  "/register",
  validate(UserValidation.register, {}, {}),
  UserController.register
);
router.post(
  "/login",
  validate(UserValidation.login, {}, {}),
  UserController.login
);
router.put(
  "/",
  auth.required,
  validate(UserValidation.update, {}, {}),
  UserController.update
);
router.delete("/", auth.required, UserController.delete);
router.get(
  "/",
  auth.required,
  validate(UserValidation.index, {}, {}),
  UserController.index
);

//admin routes

router.get(
  "/admin",
  auth.required,
  adminValidation.admin,
  UserController.getAdmin
);

router.put(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  UserController.updateAdmin
);

router.delete(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  UserController.deleteAdmin
);

router.get("/:id", auth.required, adminValidation.admin, UserController.show);

module.exports = router;
