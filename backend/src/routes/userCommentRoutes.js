const express = require("express");
const { getAllComments, getCommentById, addComment, deleteComment, updateComment } = require("../controllers/userCommentController");

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", addComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

module.exports = router;
