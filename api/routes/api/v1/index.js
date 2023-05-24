const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/categories", require("./categories"));
router.use("/developers", require("./developers"));
router.use("/publishers", require("./publishers"));

module.exports = router;
