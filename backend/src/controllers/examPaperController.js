const ExamPaper = require("../models/ExamPaper");
const path = require("path");
const fs = require("fs");

exports.getAllExamPapers = (req, res) => {
  console.log("Getting all admins");
  ExamPaper.getAll((err, exampapers) => {
    console.log(exampapers);
    if (err) return res.status(500).json({ error: err.message });
    res.json(exampapers);
  });
};

exports.getExamPaperById = (req, res) => {
  const { id } = req.params;
  ExamPaper.getById(id, (err, exampaper) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!exampaper) return res.status(404).json({ message: "ExamPaper not found" });
    res.json(exampaper);
  });
};

exports.addExamPaper = (req, res) => {
  const { name, sub_id, year, month, semester, iscomplete, university, term} = req.body;
  ExamPaper.create({name, sub_id, year, month, semester, iscomplete, university, term}, (err, newExamPaper) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newExamPaper);
  });
};

exports.deleteExamPaper = (req, res) => {
  const { id } = req.params;
  ExamPaper.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "ExamPaper not found" });
    res.json({ message: "ExamPaper deleted successfully" });
  });
};

exports.updateExamPaper = (req, res) => {
  const { id } = req.params;
  const { name, sub_id, year, month, semester, iscomplete, university, term} = req.body;

  ExamPaper.updateById(id, { name, sub_id, year, month, semester, iscomplete, university, term }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "ExamPaper not found or no changes made" });
    res.json({ message: "ExamPaper updated successfully" });
  });
};

exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename);

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: "File not found" });
    }

    res.download(filePath, filename, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error downloading file" });
      }
    });
  });
};