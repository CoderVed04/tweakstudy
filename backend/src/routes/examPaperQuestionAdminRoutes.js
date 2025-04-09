const express = require("express");
const { getAllQuestions, getQuestionById, addQuestion, updateQuestion, deleteQuestion } = require("../controllers/examPaperQuestionController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllQuestions);
router.get("/:id", authenticateAdminToken, getQuestionById);
router.post("/", authenticateAdminToken, addQuestion);
router.put("/:id", authenticateAdminToken, updateQuestion);
router.delete("/:id", authenticateAdminToken, deleteQuestion);

module.exports = router;
