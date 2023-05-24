const router = require("express").Router();
const PublisherController = require("../../../controllers/PublisherController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const PublisherValidation = require("../../../controllers/validations/publisherValidation");

router.get("/", PublisherController.index);
router.get(
  "/:id",
  validate(PublisherValidation.show, {}, {}),
  PublisherController.show
);
router.post(
  "/",
  auth.required,
  validate(PublisherValidation.register, {}, {}),
  adminValidation.admin,
  PublisherController.register
);
router.put(
  "/:id",
  auth.required,
  validate(PublisherValidation.update, {}, {}),
  adminValidation.admin,
  PublisherController.update
);
router.delete(
  "/:id",
  auth.required,
  validate(PublisherValidation.delete, {}, {}),
  adminValidation.admin,
  PublisherController.delete
);

module.exports = router;
