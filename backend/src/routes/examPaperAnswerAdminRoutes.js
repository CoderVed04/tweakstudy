const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, updateAnswer, deleteAnswer } = require("../controllers/examPaperAnswerController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllAnswers);
router.get("/:id", authenticateAdminToken, getAnswerById);
router.post("/", authenticateAdminToken, addAnswer);
router.put("/:id", authenticateAdminToken, updateAnswer);
router.delete("/:id", authenticateAdminToken, deleteAnswer);

module.exports = router;
