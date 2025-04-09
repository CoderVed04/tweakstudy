const express = require("express");
const { getAllQuestions, getQuestionById, addQuestion, updateQuestion, deleteQuestion } = require("../controllers/examPaperQuestionController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.post("/", authenticateToken, addQuestion);
router.put("/:id", authenticateToken, updateQuestion);
router.delete("/:id", authenticateToken, deleteQuestion);

module.exports = router;
