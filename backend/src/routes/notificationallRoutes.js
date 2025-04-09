const express = require("express");
const { getAllNotificationalls, getNotificationallById, addNotificationall, deleteNotificationall, updateNotificationall } = require("../controllers/notificationallController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllNotificationalls);
router.get("/:id", getNotificationallById);
router.post("/", authenticateToken, addNotificationall);
router.delete("/:id", authenticateToken, deleteNotificationall);
router.put("/:id", authenticateToken, updateNotificationall);

module.exports = router;