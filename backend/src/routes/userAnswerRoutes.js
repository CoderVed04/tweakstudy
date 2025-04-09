const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, deleteAnswer, updateAnswer } = require("../controllers/userAnswerController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllAnswers);
router.get("/:id", authenticateToken, getAnswerById);
router.post("/", authenticateToken, addAnswer);
router.delete("/:id", authenticateToken, deleteAnswer);
router.put("/:id", authenticateToken, updateAnswer);

module.exports = router;
