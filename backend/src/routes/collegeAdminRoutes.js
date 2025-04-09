const express = require("express");
const { getAllColleges, getCollegeById, addCollege, deleteCollege, updateCollege } = require("../controllers/collegeController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllColleges);
router.get("/:id", authenticateAdminToken, getCollegeById);
router.post("/", authenticateAdminToken, addCollege);
router.delete("/:id", authenticateAdminToken,deleteCollege);
router.put("/:id", authenticateAdminToken, updateCollege);

module.exports = router;
