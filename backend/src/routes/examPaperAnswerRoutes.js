const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, updateAnswer, deleteAnswer } = require("../controllers/examPaperAnswerController");

const router = express.Router();

router.get("/", getAllAnswers);
router.get("/:id", getAnswerById);
router.post("/", addAnswer);
router.put("/:id", updateAnswer);
router.delete("/:id", deleteAnswer);

module.exports = router;
