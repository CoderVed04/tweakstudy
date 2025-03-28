const Semester = require("../models/Semester");

exports.getAllSemesters = (req, res) => {
  console.log("Getting all semesters");
  Semester.getAll((err, semesters) => {
    console.log(semesters);
    if (err) return res.status(500).json({ error: err.message });
    res.json(semesters);
  });
};

exports.getSemesterById = (req, res) => {
  const { id } = req.params;
  Semester.getById(id, (err, semester) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!semester) return res.status(404).json({ message: "semester not found" });
    res.json(semester);
  });
};

exports.addSemester = (req, res) => {
  const { sem } = req.body;
  Semester.create({ sem }, (err, newSemester) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newSemester);
  });
};

exports.deleteSemester = (req, res) => {
  const { id } = req.params;
  Semester.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "semester not found" });
    res.json({ message: "semester deleted successfully" });
  });
};

exports.updateSemester = (req, res) => {
  const { id } = req.params;
  const { sem} = req.body;

  Semester.updateById(id, { sem }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Semester not found or no changes made" });
    res.json({ message: "Semester updated successfully" });
  });
};