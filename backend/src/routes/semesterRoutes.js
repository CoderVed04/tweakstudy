const express = require("express");
const { getAllSemesters, getSemesterById, addSemester, deleteSemester, updateSemester } = require("../controllers/semesterController");

const router = express.Router();

router.get("/", getAllSemesters);
router.get("/:id", getSemesterById);
router.post("/", addSemester);
router.delete("/:id", deleteSemester);
router.put("/:id", updateSemester);

module.exports = router;