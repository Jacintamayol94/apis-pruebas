const express = require ("express")
const router = express.Router();
const apiController = require ("../../controllers/api/moviesController");

// Endpoints
router.get("/apiMovie", apiController.list)
router.get("/apiMovie/:id/detail", apiController.show)
router.post("/apiMovie", apiController.store)
router.delete("/apiMovie/:id/detail", apiController.delete)
router.put("/apiMovie/:id/detail", apiController.update)
router.get("/apiMovie/search", apiController.search)

module.exports = router;