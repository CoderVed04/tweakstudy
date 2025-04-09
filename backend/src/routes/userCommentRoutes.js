const express = require("express");
const { getAllComments, getCommentById, addComment, deleteComment, updateComment } = require("../controllers/userCommentController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", authenticateToken, addComment);
router.delete("/:id", authenticateToken, deleteComment);
router.put("/:id", authenticateToken, updateComment);

module.exports = router;
