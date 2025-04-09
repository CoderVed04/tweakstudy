const express = require("express");
const { getAllFavorites, getFavoriteById, addFavorite, deleteFavorite, updateFavorite } = require("../controllers/favoriteController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllFavorites);
router.get("/:id", getFavoriteById);
router.post("/", authenticateToken, addFavorite);
router.delete("/:id", authenticateToken, deleteFavorite);
router.put("/:id", authenticateToken, updateFavorite);

module.exports = router;
