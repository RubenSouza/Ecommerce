const router = require("express").Router();
const HighlightController = require("../../../controllers/HighlightController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");
const { validate } = require("express-validation");
const HighlightValidation = require("../../../controllers/validations/highlightValidation");

router.get("/", HighlightController.index);
router.get("/:id", HighlightController.show);
router.post(
  "/",
  auth.required,
  validate(HighlightValidation.register, {}, {}),
  adminValidation.admin,
  HighlightController.register
);

router.put(
  "/:id",
  auth.required,
  validate(HighlightValidation.update, {}, {}),
  adminValidation.admin,
  HighlightController.update
);

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  HighlightController.delete
);
