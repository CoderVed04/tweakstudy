const Notificationall = require("../models/Notificationall");

exports.getAllNotificationalls = (req, res) => {
  console.log("Getting all notificationall");
  Notificationall.getAll((err, notificationalls) => {
    console.log(notificationalls);
    if (err) return res.status(500).json({ error: err.message });
    res.json(notificationalls);
  });
};

exports.getNotificationallById = (req, res) => {
  const { id } = req.params;
  Notificationall.getById(id, (err, notificationall) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!notificationall) return res.status(404).json({ message: "notificationall not found" });
    res.json(notificationall);
  });
};

exports.addNotificationall = (req, res) => {
  const { que_id, ans, date, posted_by, status } = req.body;
  Notificationall.create({ que_id, ans, date, posted_by, status }, (err, newNotificationall) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newNotificationall);
  });
};

exports.deleteNotificationall = (req, res) => {
  const { id } = req.params;
  Notificationall.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "notificationall not found" });
    res.json({ message: "notificationall deleted successfully" });
  });
};

exports.updateNotificationall = (req, res) => {
  const { id } = req.params;
  const { que_id, ans, date, posted_by, status } = req.body;

  Notificationall.updateById(id, { que_id, ans, date, posted_by, status }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Notificationall not found or no changes made" });
    res.json({ message: "Notificationall updated successfully" });
  });
};