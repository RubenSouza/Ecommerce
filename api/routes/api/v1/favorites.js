const router = require("express").Router();

const favoriteController = require("../../../controllers/FavoriteController");
const auth = require("../../auth");

router.get("/", auth.required, favoriteController.index);
router.post("/:gameId", auth.required, favoriteController.create);
router.delete("/:gameId", auth.required, favoriteController.delete);

module.exports = router;
