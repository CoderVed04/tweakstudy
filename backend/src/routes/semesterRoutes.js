const express = require("express");
const { getAllSemesters, getSemesterById, addSemester, deleteSemester, updateSemester } = require("../controllers/semesterController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllSemesters);
router.get("/:id", authenticateToken, getSemesterById);
router.post("/", authenticateToken, addSemester);
router.delete("/:id", authenticateToken, deleteSemester);
router.put("/:id", authenticateToken, updateSemester);

module.exports = router;