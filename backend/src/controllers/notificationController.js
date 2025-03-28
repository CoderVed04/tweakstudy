const Notification = require("../models/Notification");

exports.getAllNotifications = (req, res) => {
  console.log("Getting all Notification");
  Notification.getAll((err, notifications) => {
    console.log(notifications);
    if (err) return res.status(500).json({ error: err.message });
    res.json(notifications);
  });
};

exports.getNotificationById = (req, res) => {
  const { id } = req.params;
  Notification.getById(id, (err, notification) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!notification) return res.status(404).json({ message: "Notification not found" });
    res.json(notification);
  });
};

exports.addNotification = (req, res) => {
  const { userid, type, reason, viewed, date } = req.body;
  Notification.create({ userid, type, reason, viewed, date }, (err, newPaper) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newPaper);
  });
};

exports.deleteNotification = (req, res) => {
  const { id } = req.params;
  Notification.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Notification not found" });
    res.json({ message: "Notification deleted successfully" });
  });
};

exports.updateNotification = (req, res) => {
  const { id } = req.params;
  const {  userid, type, reason, viewed, date  } = req.body;

  Notification.updateById(id, {  userid, type, reason, viewed, date  }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Notification not found or no changes made" });
    res.json({ message: "Notification updated successfully" });
  });
};