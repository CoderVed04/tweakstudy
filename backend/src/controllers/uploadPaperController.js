const UploadPaper = require("../models/UploadPaper")
const path = require("path");
const fs = require("fs");

exports.getAllUploadPapers = (req, res) => {
  console.log("Getting all papers");
  UploadPaper.getAll((err, uploadpapers) => {
    console.log(uploadpapers);
    if (err) return res.status(500).json({ error: err.message });
    res.json(uploadpapers);
  });
};

exports.getUploadPaperById = (req, res) => {
  const { id } = req.params;
  UploadPaper.getById(id, (err, uploadpaper) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!uploadpaper) return res.status(404).json({ message: "uploadpaper not found" });
    res.json(uploadpaper);
  });
};

exports.addUploadPaper = (req, res) => {
  const { exm_paper_id, link} = req.body;
  UploadPaper.create({exm_paper_id, link}, (err, newuploadpaper) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newuploadpaper);
  });
};

exports.deleteUploadPaper = (req, res) => {
  const { id } = req.params;
  UploadPaper.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "uploadpaper not found" });
    res.json({ message: "uploadpaper deleted successfully" });
  });
};

exports.updateUploadPaper = (req, res) => {
  const { id } = req.params;
  const { exm_paper_id, link} = req.body;

  UploadPaper.updateById(id, {exm_paper_id, link}, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "uploadpaper not found or no changes made" });
    res.json({ message: "uploadpaper updated successfully" });
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