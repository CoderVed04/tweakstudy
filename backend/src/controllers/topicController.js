const Topic = require("../models/Topic");

exports.getAllTopics = (req, res) => {
  console.log("Getting all Topic");
  Topic.getAll((err, topics) => {
    console.log(topics);
    if (err) return res.status(500).json({ error: err.message });
    res.json(topics);
  });
}

exports.getTopicById = (req, res) => {
  const { id } = req.params;
  Topic.getById(id, (err, topic) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!topic) return res.status(404).json({ message: "Topic not found" });
    res.json(topic);
  });
};

exports.addTopic = (req, res) => {
  const { sub_id, topic_name} = req.body;
  Topic.create({ sub_id, topic_name }, (err, newtopic) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newtopic);
  });
};

exports.deleteTopic = (req, res) => {
  const { id } = req.params;
  Topic.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Topic not found" });
    res.json({ message: "Topic deleted successfully" });
  });
};

exports.updateTopic = (req, res) => {
  const { id } = req.params;
  const { sub_id, topic_name } = req.body;

  Topic.updateById(id, { sub_id, topic_name }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Topic not found or no changes made" });
    res.json({ message: "Topic updated successfully" });
  });
};