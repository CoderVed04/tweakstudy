const express = require("express");
const { getAllExamPapers, getExamPaperById, addExamPaper, deleteExamPaper, updateExamPaper, downloadFile } = require("../controllers/examPaperController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();
const upload = require("../middlewares/upload");

router.get("/", getAllExamPapers);
router.get("/:id", getExamPaperById);
router.post("/", authenticateToken, upload.single("file"), addExamPaper);
router.delete("/:id", authenticateToken, deleteExamPaper);
router.put("/:id", authenticateToken, upload.single("file"), updateExamPaper);
router.get("/download/:filename", downloadFile);

module.exports = router;
