const express = require("express");
const { getAllAnswers, getAnswerById, addAnswer, deleteAnswer, updateAnswer } = require("../controllers/userAnswerController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllAnswers);
router.get("/:id", authenticateAdminToken, getAnswerById);
router.post("/", authenticateAdminToken, addAnswer);
router.delete("/:id", authenticateAdminToken, deleteAnswer);
router.put("/:id", authenticateAdminToken, updateAnswer);

module.exports = router;
