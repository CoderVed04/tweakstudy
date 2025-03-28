const Subject = require("../models/Subject");

exports.getAllSubjects = (req, res) => {
  console.log("Getting all subjects");
  Subject.getAll((err, subjects) => {
    console.log(subjects);
    if (err) return res.status(500).json({ error: err.message });
    res.json(subjects);
  });
};

exports.getSubjectById = (req, res) => {
  const { id } = req.params;
  Subject.getById(id, (err, subject) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json(subject);
  });
};

exports.addSubject = (req, res) => {
  const { name, sub_code, image, b_id } = req.body;
  Subject.create({ name, sub_code, image, b_id }, (err, newSubject) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newSubject);
  });
};

exports.deleteSubject = (req, res) => {
  const { id } = req.params;
  Subject.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Subject not found" });
    res.json({ message: "Subject deleted successfully" });
  });
};

exports.updateSubject = (req, res) => {
  const { id } = req.params;
  const { name, sub_code, image, b_id } = req.body;

  Subject.updateById(id, { name, sub_code, image, b_id }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Subject not found or no changes made" });
    res.json({ message: "Subject updated successfully" });
  });
};
