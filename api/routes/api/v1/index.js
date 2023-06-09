const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/categories", require("./categories"));
router.use("/developers", require("./developers"));
router.use("/publishers", require("./publishers"));
router.use("/platforms", require("./platforms"));
router.use("/system-requirement", require("./systemRequirement"));
router.use("/games", require("./games"));
router.use("/populate", require("./populate"));
router.use("/highlights", require("./highlights"));
router.use("/home", require("./home"));
router.use("/favorites", require("./favorites"));
router.use("/orders", require("./orders"));

module.exports = router;
