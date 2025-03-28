const express = require("express");
const { getAllNotifications, getNotificationById, addNotification, deleteNotification, updateNotification } = require("../controllers/notificationController");

const router = express.Router();

router.get("/", getAllNotifications);
router.get("/:id", getNotificationById);
router.post("/", addNotification);
router.delete("/:id", deleteNotification);
router.put("/:id", updateNotification);

module.exports = router;
