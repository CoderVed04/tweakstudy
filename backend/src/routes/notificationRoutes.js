const express = require("express");
const { getAllNotifications, getNotificationById, addNotification, deleteNotification, updateNotification } = require("../controllers/notificationController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllNotifications);
router.get("/:id", getNotificationById);
router.post("/", authenticateToken, addNotification);
router.delete("/:id", authenticateToken, deleteNotification);
router.put("/:id", authenticateToken, updateNotification);

module.exports = router;
