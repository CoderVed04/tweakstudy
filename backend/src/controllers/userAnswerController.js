const UserAnswer = require("../models/UserAnswer");

exports.getAllAnswers = (req, res) => {
  console.log("Getting all User Answers");
  UserAnswer.getAll((err, answers) => {
    console.log(answers);
    if (err) return res.status(500).json({ error: err.message });
    res.json(answers);
  });
}

exports.getAnswerById = (req, res) => {
  const { id } = req.params;
  UserAnswer.getById(id, (err, answer) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!answer) return res.status(404).json({ message: "answers not found" });
    res.json(answer);
  });
};

exports.addAnswer = (req, res) => {
  const { que_id, ans, date, posted_by, status} = req.body;
  UserAnswer.create({ que_id, ans, date, posted_by, status }, (err, newanswer) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newanswer);
  });
};

exports.deleteAnswer = (req, res) => {
  const { id } = req.params;
  UserAnswer.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "answers not found" });
    res.json({ message: "answers deleted successfully" });
  });
};

exports.updateAnswer = (req, res) => {
  const { id } = req.params;
  const { que_id, ans, date, posted_by, status } = req.body;

  UserAnswer.updateById(id, { que_id, ans, date, posted_by, status }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "answers not found or no changes made" });
    res.json({ message: "answer updated successfully" });
  });
};