const express = require("express");
const { getAllExamPapers, getExamPaperById, addExamPaper, deleteExamPaper, updateExamPaper, downloadFile } = require("../controllers/examPaperController");

const router = express.Router();
const upload = require("../middlewares/upload");

router.get("/", getAllExamPapers);
router.get("/:id", getExamPaperById);
router.post("/", upload.single("file"), addExamPaper);
router.delete("/:id", deleteExamPaper);
router.put("/:id", upload.single("file"), updateExamPaper);
router.get("/download/:filename", downloadFile);

module.exports = router;
