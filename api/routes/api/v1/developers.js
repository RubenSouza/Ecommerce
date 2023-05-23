const router = require("express").Router();
const DeveloperController = require("../../../controllers/DeveloperController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const DeveloperValidation = require("../../../controllers/validations/developerValidation");

router.get("/", DeveloperController.index);
router.get(
  "/:id",
  validate(DeveloperValidation.show, {}, {}),
  DeveloperController.show
);
router.post(
  "/",
  auth.required,
  validate(DeveloperValidation.register, {}, {}),
  adminValidation.admin,
  DeveloperController.register
);

router.put(
  "/:id",
  auth.required,
  validate(DeveloperValidation.update, {}, {}),
  adminValidation.admin,
  DeveloperController.update
);

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  DeveloperController.delete
);

module.exports = router;
