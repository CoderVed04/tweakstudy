const express = require("express");
const { getAllUniversitys, getUniversityById, addUniversity, deleteUniversity, updateUniversity } = require("../controllers/universityController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllUniversitys);
router.get("/:id", authenticateAdminToken, getUniversityById);
router.post("/", authenticateAdminToken, addUniversity);
router.delete("/:id", authenticateAdminToken, deleteUniversity);
router.put("/:id", authenticateAdminToken, updateUniversity);

module.exports = router;