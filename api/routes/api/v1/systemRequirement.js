const router = require("express").Router();
const SystemRequirementController = require("../../../controllers/SystemRequirementController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const SystemRequirementValidation = require("../../../controllers/validations/systemRequirementValidation");

router.get("/", SystemRequirementController.index);
router.get(
  "/:id",
  validate(SystemRequirementValidation.show, {}, {}),
  SystemRequirementController.show
);
router.post(
  "/",
  auth.required,
  validate(SystemRequirementValidation.register, {}, {}),
  adminValidation.admin,
  SystemRequirementController.register
);

router.put(
  "/:id",
  auth.required,
  validate(SystemRequirementValidation.update, {}, {}),
  adminValidation.admin,
  SystemRequirementController.update
);

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  validate(SystemRequirementValidation.delete, {}, {}),
  SystemRequirementController.delete
);

module.exports = router;
