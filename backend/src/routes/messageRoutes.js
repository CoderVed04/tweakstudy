const express = require("express");
const { getAllMessages, getMessageById, addMessage, deleteMessage, updateMessage } = require("../controllers/messageController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", authenticateToken, addMessage);
router.delete("/:id", authenticateToken, deleteMessage);
router.put("/:id", authenticateToken, updateMessage);

module.exports = router;
