const ExamPaperAnswer = require("../models/ExamPaperAnswer");

exports.getAllAnswers = (req, res) => {
  ExamPaperAnswer.getAll((err, answers) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(answers);
  });
};

exports.getAnswerById = (req, res) => {
  const { id } = req.params;
  ExamPaperAnswer.getById(id, (err, answer) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!answer) return res.status(404).json({ message: "Answer not found" });
    res.json(answer);
  });
};

exports.addAnswer = (req, res) => {
  ExamPaperAnswer.create(req.body, (err, newAnswer) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newAnswer);
  });
};

exports.updateAnswer = (req, res) => {
  const { id } = req.params;
  ExamPaperAnswer.updateById(id, req.body, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Answer not found or no changes made" });
    res.json({ message: "Answer updated successfully" });
  });
};

exports.deleteAnswer = (req, res) => {
  const { id } = req.params;
  ExamPaperAnswer.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Answer not found" });
    res.json({ message: "Answer deleted successfully" });
  });
};
