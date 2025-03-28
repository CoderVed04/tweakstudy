const Favorite = require("../models/Favorite");

exports.getAllFavorites = (req, res) => {
  console.log("Getting all favorites");
  Favorite.getAll((err, favorites) => {
    console.log(favorites);
    if (err) return res.status(500).json({ error: err.message });
    res.json(favorites);
  });
};

exports.getFavoriteById = (req, res) => {
  const { id } = req.params;
  Favorite.getById(id, (err, favorite) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!favorite) return res.status(404).json({ message: "Favorites not found" });
    res.json(favorite);
  });
};

exports.addFavorite = (req, res) => {
  const { qid, uid, dt } = req.body;
  Favorite.create({ qid, uid, dt }, (err, newFavorite) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newFavorite);
  });
};

exports.deleteFavorite = (req, res) => {
  const { id } = req.params;
  Favorite.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Favorite not found" });
    res.json({ message: "Favorite deleted successfully" });
  });
};

exports.updateFavorite = (req, res) => {
  const { id } = req.params;
  const { qid, uid, dt } = req.body;

  Favorite.updateById(id, { qid, uid, dt }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Favorite not found or no changes made" });
    res.json({ message: "Favorite updated successfully" });
  });
};