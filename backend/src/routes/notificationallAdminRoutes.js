const express = require("express");
const { getAllNotificationalls, getNotificationallById, addNotificationall, deleteNotificationall, updateNotificationall } = require("../controllers/notificationallController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllNotificationalls);
router.get("/:id", authenticateAdminToken, getNotificationallById);
router.post("/", authenticateAdminToken, addNotificationall);
router.delete("/:id", authenticateAdminToken, deleteNotificationall);
router.put("/:id", authenticateAdminToken, updateNotificationall);

module.exports = router;