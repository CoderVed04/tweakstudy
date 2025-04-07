const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, deleteAnswer, updateAnswer } = require("../controllers/userAnswerController");

const router = express.Router();

router.get("/", getAllAnswers);
router.get("/:id", getAnswerById);
router.post("/", addAnswer);
router.delete("/:id", deleteAnswer);
router.put("/:id", updateAnswer);

module.exports = router;
