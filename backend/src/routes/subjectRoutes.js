const express = require("express");
const { getAllSubjects, getSubjectById, addSubject, deleteSubject, updateSubject } = require("../controllers/subjectController");

const router = express.Router();

router.get("/", getAllSubjects);
router.get("/:id", getSubjectById);
router.post("/", addSubject);
router.delete("/:id", deleteSubject);
router.put("/:id", updateSubject);

module.exports = router;
