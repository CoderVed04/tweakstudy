const express = require("express");
const { getAllComments, getCommentById, addComment, deleteComment, updateComment } = require("../controllers/userCommentController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllComments);
router.get("/:id", authenticateAdminToken, getCommentById);
router.post("/", authenticateAdminToken, addComment);
router.delete("/:id", authenticateAdminToken, deleteComment);
router.put("/:id", authenticateAdminToken, updateComment);

module.exports = router;
