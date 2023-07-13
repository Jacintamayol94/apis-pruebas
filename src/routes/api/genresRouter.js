const express = require ("express")
const router = express.Router();
const apiController = require ("../../controllers/api/genresController");

router.get("/api", apiController.getAll)
router.get("/api/:id/detail", apiController.getDetail)
router.post("/api", apiController.create)

module.exports = router;

