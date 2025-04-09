const express = require("express");
const { getAllUniversitys, getUniversityById, addUniversity, deleteUniversity, updateUniversity } = require("../controllers/universityController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllUniversitys);
router.get("/:id", authenticateToken, getUniversityById);
router.post("/", authenticateToken, addUniversity);
router.delete("/:id", authenticateToken, deleteUniversity);
router.put("/:id", authenticateToken, updateUniversity);

module.exports = router;