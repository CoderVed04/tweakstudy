const Feedback = require("../models/Feedback");

exports.getAllFeedbacks = (req, res) => {
  console.log("Getting all feedback");
  Feedback.getAll((err, feedbacks) => {
    console.log(feedbacks);
    if (err) return res.status(500).json({ error: err.message });
    res.json(feedbacks);
  });
};

exports.getFeedbackById = (req, res) => {
  const { id } = req.params;
  Feedback.getById(id, (err, feedback) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });
    res.json(feedback);
  });
};

exports.addFeedback = (req, res) => {
  const { uid, ui, content, help, dt } = req.body;
  Feedback.create({ uid, ui, content, help, dt }, (err, newFeedback) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newFeedback);
  });
};

exports.deleteFeedback = (req, res) => {
  const { id } = req.params;
  Feedback.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "feedback not found" });
    res.json({ message: "feedback deleted successfully" });
  });
};

exports.updateFeedback = (req, res) => {
  const { id } = req.params;
  const { uid, ui, content, help, dt  } = req.body;

  Feedback.updateById(id, {uid, ui, content, help, dt }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Feedback not found or no changes made" });
    res.json({ message: "Feedback updated successfully" });
  });
};