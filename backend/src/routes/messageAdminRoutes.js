const express = require("express");
const { getAllMessages, getMessageById, addMessage, deleteMessage, updateMessage } = require("../controllers/messageController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllMessages);
router.get("/:id", authenticateAdminToken, getMessageById);
router.post("/", authenticateAdminToken, addMessage);
router.delete("/:id", authenticateAdminToken, deleteMessage);
router.put("/:id", authenticateAdminToken, updateMessage);

module.exports = router;
