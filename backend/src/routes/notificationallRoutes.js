const express = require("express");
const { getAllNotificationalls, getNotificationallById, addNotificationall, deleteNotificationall, updateNotificationall } = require("../controllers/notificationallController");

const router = express.Router();

router.get("/", getAllNotificationalls);
router.get("/:id", getNotificationallById);
router.post("/", addNotificationall);
router.delete("/:id", deleteNotificationall);
router.put("/:id", updateNotificationall);

module.exports = router;