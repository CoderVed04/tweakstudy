const express = require("express");
const { getAllPapers, getPaperById, addPaper, deletePaper } = require("../controllers/paperController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllPapers);
router.get("/:id", getPaperById);
router.post("/", addPaper);
router.delete("/:id", deletePaper);

module.exports = router;
