const express = require("express");
const { getAllFeedbacks, getFeedbackById, addFeedback, deleteFeedback, updateFeedback } = require("../controllers/feedbackController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllFeedbacks);
router.get("/:id", getFeedbackById);
router.post("/", authenticateToken, addFeedback);
router.delete("/:id", authenticateToken, deleteFeedback);
router.put("/:id", authenticateToken, updateFeedback);

module.exports = router;
