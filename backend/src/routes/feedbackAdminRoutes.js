const express = require("express");
const { getAllFeedbacks, getFeedbackById, addFeedback, deleteFeedback, updateFeedback } = require("../controllers/feedbackController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllFeedbacks);
router.get("/:id", authenticateAdminToken, getFeedbackById);
router.post("/", authenticateAdminToken, addFeedback);
router.delete("/:id", authenticateAdminToken, deleteFeedback);
router.put("/:id", authenticateAdminToken, updateFeedback);

module.exports = router;
