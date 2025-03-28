const ExamPaperQuestion = require("../models/ExamPaperQuestion");

exports.getAllQuestions = (req, res) => {
  ExamPaperQuestion.getAll((err, questions) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(questions);
  });
};

exports.getQuestionById = (req, res) => {
  const { id } = req.params;
  ExamPaperQuestion.getById(id, (err, question) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!question) return res.status(404).json({ message: "Question not found" });
    res.json(question);
  });
};

exports.addQuestion = (req, res) => {
  ExamPaperQuestion.create(req.body, (err, newQuestion) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newQuestion);
  });
};

exports.updateQuestion = (req, res) => {
  const { id } = req.params;
  ExamPaperQuestion.updateById(id, req.body, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Question not found or no changes made" });
    res.json({ message: "Question updated successfully" });
  });
};

exports.deleteQuestion = (req, res) => {
  const { id } = req.params;
  ExamPaperQuestion.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Question not found" });
    res.json({ message: "Question deleted successfully" });
  });
};
