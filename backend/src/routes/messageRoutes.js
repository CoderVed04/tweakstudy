const express = require("express");
const { getAllMessages, getMessageById, addMessage, deleteMessage, updateMessage } = require("../controllers/messageController");

const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", addMessage);
router.delete("/:id", deleteMessage);
router.put("/:id", updateMessage);

module.exports = router;
