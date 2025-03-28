const express = require("express");
const { getAllFavorites, getFavoriteById, addFavorite, deleteFavorite, updateFavorite } = require("../controllers/favoriteController");

const router = express.Router();

router.get("/", getAllFavorites);
router.get("/:id", getFavoriteById);
router.post("/", addFavorite);
router.delete("/:id", deleteFavorite);
router.put("/:id", updateFavorite);

module.exports = router;
