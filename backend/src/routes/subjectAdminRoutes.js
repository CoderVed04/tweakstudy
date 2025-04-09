const express = require("express");
const { getAllSubjects, getSubjectById, addSubject, deleteSubject, updateSubject } = require("../controllers/subjectController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllSubjects);
router.get("/:id", authenticateAdminToken, getSubjectById);
router.post("/", authenticateAdminToken, addSubject);
router.delete("/:id", authenticateAdminToken, deleteSubject);
router.put("/:id", authenticateAdminToken, updateSubject);

module.exports = router;
