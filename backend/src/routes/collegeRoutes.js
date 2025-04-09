const express = require("express");
const { getAllColleges, getCollegeById, addCollege, deleteCollege, updateCollege } = require("../controllers/collegeController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllColleges);
router.get("/:id", authenticateToken, getCollegeById);
router.post("/", authenticateToken, addCollege);
router.delete("/:id", authenticateToken,deleteCollege);
router.put("/:id", authenticateToken, updateCollege);

module.exports = router;
