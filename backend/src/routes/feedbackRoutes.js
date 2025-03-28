const express = require("express");
const { getAllFeedbacks, getFeedbackById, addFeedback, deleteFeedback, updateFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.get("/", getAllFeedbacks);
router.get("/:id", getFeedbackById);
router.post("/", addFeedback);
router.delete("/:id", deleteFeedback);
router.put("/:id", updateFeedback);

module.exports = router;
