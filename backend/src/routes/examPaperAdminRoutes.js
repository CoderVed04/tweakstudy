const express = require("express");
const { getAllExamPapers, getExamPaperById, addExamPaper, deleteExamPaper, updateExamPaper, downloadFile } = require("../controllers/examPaperController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();
const upload = require("../middlewares/upload");

router.get("/", authenticateAdminToken, getAllExamPapers);
router.get("/:id", authenticateAdminToken, getExamPaperById);
router.post("/", authenticateAdminToken, upload.single("file"), addExamPaper);
router.delete("/:id", authenticateAdminToken, deleteExamPaper);
router.put("/:id", authenticateAdminToken, upload.single("file"), updateExamPaper);
router.get("/download/:filename", downloadFile);

module.exports = router;
