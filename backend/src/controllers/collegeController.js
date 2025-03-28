const College = require("../models/College");

exports.getAllColleges = (req, res) => {
  console.log("Getting all colleges");
  College.getAll((err, colleges) => {
    console.log(colleges);
    if (err) return res.status(500).json({ error: err.message });
    res.json(colleges);
  });
};

exports.getCollegeById = (req, res) => {
  const { id } = req.params;
  College.getById(id, (err, college) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!college) return res.status(404).json({ message: "Paper not found" });
    res.json(college);
  });
};

exports.addCollege = (req, res) => {
  const { cname } = req.body;
  College.create({ cname }, (err, newCollege) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newCollege);
  });
};

exports.deleteCollege = (req, res) => {
  const { id } = req.params;
  College.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "College not found" });
    res.json({ message: "College deleted successfully" });
  });
};

exports.updateCollege = (req, res) => {
  const { id } = req.params;
  const { cname } = req.body;

  College.updateById(id, { cname }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "College not found or no changes made" });
    res.json({ message: "College updated successfully" });
  });
};