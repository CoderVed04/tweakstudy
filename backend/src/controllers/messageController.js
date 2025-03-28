const Message = require("../models/Message");

exports.getAllMessages = (req, res) => {
  console.log("Getting all messages");
  Message.getAll((err, messages) => {
    console.log(messages);
    if (err) return res.status(500).json({ error: err.message });
    res.json(messages);
  });
};

exports.getMessageById = (req, res) => {
  const { id } = req.params;
  Message.getById(id, (err, message) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!message) return res.status(404).json({ message: "message not found" });
    res.json(message);
  });
};

exports.addMessage = (req, res) => {
  const {type, msg1, uid } = req.body;
  Message.create({ type, msg1, uid  }, (err, newMessage) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newMessage);
  });
};

exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  Message.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "message not found" });
    res.json({ message: "message deleted successfully" });
  });
};

exports.updateMessage = (req, res) => {
  const { id } = req.params;
  const {type, msg1, uid } = req.body;

  Message.updateById(id, { type, msg1, uid }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Message not found or no changes made" });
    res.json({ message: "Message updated successfully" });
  });
};