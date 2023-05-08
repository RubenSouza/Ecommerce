const router = require("express").Router();
const UserController = require("../../../controllers/UserController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

//client routes

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/", auth.required, UserController.update);
router.delete("/", auth.required, UserController.delete);
router.get("/", auth.required, UserController.index);

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
