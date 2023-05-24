const router = require("express").Router();
const PlatformController = require("../../../controllers/PlatformController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const PlatformValidation = require("../../../controllers/validations/platformValidation");

router.get("/", PlatformController.index);
router.get(
  "/:id",
  validate(PlatformValidation.show, {}, {}),
  PlatformController.show
);
router.post(
  "/",
  auth.required,
  validate(PlatformValidation.register, {}, {}),
  adminValidation.admin,
  PlatformController.register
);
router.put(
  "/:id",
  auth.required,
  validate(PlatformValidation.update, {}, {}),
  adminValidation.admin,
  PlatformController.update
);
router.delete(
  "/:id",
  auth.required,
  validate(PlatformValidation.delete, {}, {}),
  adminValidation.admin,
  PlatformController.delete
);

module.exports = router;
