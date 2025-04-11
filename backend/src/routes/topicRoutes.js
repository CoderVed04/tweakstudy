const express = require("express");
const { getAllTopics, getTopicById, addTopic, deleteTopic, updateTopic } = require("../controllers/topicController");
const { authenticateAdminToken } = require("../controllers/authAdminController");  

const router = express.Router();

router.get("/", getAllTopics);
router.get("/:id",  getTopicById);
router.post("/", authenticateAdminToken, addTopic);
router.delete("/:id", authenticateAdminToken, deleteTopic);
router.put("/:id", authenticateAdminToken, updateTopic);

module.exports = router;
