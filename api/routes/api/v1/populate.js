const router = require("express").Router();
const PopulateController = require("../../../controllers/PopulateController");


router.get("/", PopulateController.populate);

module.exports = router;
