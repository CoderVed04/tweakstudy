const express = require("express");
const { getAllSubjects, getSubjectById, addSubject, deleteSubject, updateSubject } = require("../controllers/subjectController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllSubjects);
router.get("/:id", authenticateToken, getSubjectById);
router.post("/", authenticateToken, addSubject);
router.delete("/:id", authenticateToken, deleteSubject);
router.put("/:id", authenticateToken, updateSubject);

module.exports = router;
