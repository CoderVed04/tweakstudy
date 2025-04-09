const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, updateAnswer, deleteAnswer } = require("../controllers/examPaperAnswerController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllAnswers);
router.get("/:id", getAnswerById);
router.post("/", authenticateToken, addAnswer);
router.put("/:id", authenticateToken, updateAnswer);
router.delete("/:id", authenticateToken, deleteAnswer);

module.exports = router;
