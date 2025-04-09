const express = require("express");
const { getAllSemesters, getSemesterById, addSemester, deleteSemester, updateSemester } = require("../controllers/semesterController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllSemesters);
router.get("/:id", authenticateAdminToken, getSemesterById);
router.post("/", authenticateAdminToken, addSemester);
router.delete("/:id", authenticateAdminToken, deleteSemester);
router.put("/:id", authenticateAdminToken, updateSemester);

module.exports = router;