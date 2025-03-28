const express = require("express");
const { getAllExamPapers, getExamPaperById, addExamPaper, deleteExamPaper, updateExamPaper } = require("../controllers/examPaperController");

const router = express.Router();

router.get("/", getAllExamPapers);
router.get("/:id", getExamPaperById);
router.post("/", addExamPaper);
router.delete("/:id", deleteExamPaper);
router.put("/:id", updateExamPaper);

module.exports = router;
