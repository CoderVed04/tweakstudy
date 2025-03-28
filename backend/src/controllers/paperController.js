const Paper = require("../models/Paper");

exports.getAllPapers = (req, res) => {
  console.log("Getting all papers");
  Paper.getAll((err, papers) => {
    console.log(papers);
    if (err) return res.status(500).json({ error: err.message });
    res.json(papers);
  });
};

exports.getPaperById = (req, res) => {
  const { id } = req.params;
  Paper.getById(id, (err, paper) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!paper) return res.status(404).json({ message: "Paper not found" });
    res.json(paper);
  });
};

exports.addPaper = (req, res) => {
  const { title, year, subject } = req.body;
  Paper.create({ title, year, subject }, (err, newPaper) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newPaper);
  });
};

exports.deletePaper = (req, res) => {
  const { id } = req.params;
  Paper.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Paper not found" });
    res.json({ message: "Paper deleted successfully" });
  });
};

