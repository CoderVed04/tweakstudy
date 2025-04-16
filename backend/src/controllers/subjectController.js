const Subject = require("../models/Subject");
const fs = require("fs");
const path = require("path");

const getImageUrl = (imageName) => {
  if (!imageName) return null;
  return `http://localhost:5000/uploads/${imageName}`;
};

exports.getAllSubjects = (req, res) => {
  Subject.getAll((err, subjects) => {
    if (err) return res.status(500).json({ error: err.message });
    const withImageUrls = subjects.map((subject) => ({
      ...subject,
      imageUrl: getImageUrl(subject.image),
    }));
    res.json(withImageUrls);
  });
};

exports.getSubjectById = (req, res) => {
  const { id } = req.params;
  Subject.getById(id, (err, subject) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    subject.imageUrl = getImageUrl(subject.image);
    res.json(subject);
  });
};

exports.addSubject = (req, res) => {
  const { name, sub_code, b_id } = req.body;
  const image = req.file ? req.file.filename : null;

  Subject.create({ name, sub_code, image, b_id }, (err, newSubject) => {
    if (err) return res.status(500).json({ error: err.message });
    newSubject.imageUrl = getImageUrl(newSubject.image);
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
  const { name, sub_code, b_id } = req.body;
  const image = req.file ? req.file.filename : null;

  Subject.updateById(id, { name, sub_code, image, b_id }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success)
      return res
        .status(404)
        .json({ message: "Subject not found or no changes made" });
    res.json({ message: "Subject updated successfully" });
  });
};

exports.getAllImages = (req, res) => {
  const uploadsDir = path.join(__dirname, "..", "uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) return res.status(500).json({ error: "Unable to fetch images" });

    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    const imageUrls = imageFiles.map((file) => ({
      filename: file,
      url: `http://localhost:5000/uploads/${file}`,
    }));

    res.json(imageUrls);
  });
};
