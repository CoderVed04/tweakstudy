const express = require("express");
const { getAllNotifications, getNotificationById, addNotification, deleteNotification, updateNotification } = require("../controllers/notificationController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllNotifications);
router.get("/:id", authenticateAdminToken, getNotificationById);
router.post("/", authenticateAdminToken, addNotification);
router.delete("/:id", authenticateAdminToken, deleteNotification);
router.put("/:id", authenticateAdminToken, updateNotification);

module.exports = router;
