const express = require("express");
const { getAllFavorites, getFavoriteById, addFavorite, deleteFavorite, updateFavorite } = require("../controllers/favoriteController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllFavorites);
router.get("/:id", authenticateAdminToken, getFavoriteById);
router.post("/", authenticateAdminToken, addFavorite);
router.delete("/:id", authenticateAdminToken, deleteFavorite);
router.put("/:id", authenticateAdminToken, updateFavorite);

module.exports = router;
