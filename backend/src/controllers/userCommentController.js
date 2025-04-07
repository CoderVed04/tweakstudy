const UserComment = require("../models/UserComment");

exports.getAllComments = (req, res) => {
  console.log("Getting all comments");
  UserComment.getAll((err, comments) => {
    console.log(comments);
    if (err) return res.status(500).json({ error: err.message });
    res.json(comments);
  });
}

exports.getCommentById = (req, res) => {
  const { id } = req.params;
  UserComment.getById(id, (err, comment) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
  });
};

exports.addComment = (req, res) => {
  const { paper_id, topic_id, que_id, date, comment, posted_by, status} = req.body;
  UserComment.create({ paper_id, topic_id, que_id, date, comment, posted_by, status }, (err, newcomment) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newcomment);
  });
};

exports.deleteComment = (req, res) => {
  const { id } = req.params;
  UserComment.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Comment not found" });
    res.json({ message: "Comment deleted successfully" });
  });
};

exports.updateComment = (req, res) => {
  const { id } = req.params;
  const { paper_id, topic_id, que_id, date, comment, posted_by, status } = req.body;

  UserComment.updateById(id, { paper_id, topic_id, que_id, date, comment, posted_by, status }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Comment not found or no changes made" });
    res.json({ message: "Comment updated successfully" });
  });
};