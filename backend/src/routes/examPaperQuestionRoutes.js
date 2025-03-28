const express = require("express");
const { getAllQuestions, getQuestionById, addQuestion, updateQuestion, deleteQuestion } = require("../controllers/examPaperQuestionController");

const router = express.Router();

router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.post("/", addQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

module.exports = router;
