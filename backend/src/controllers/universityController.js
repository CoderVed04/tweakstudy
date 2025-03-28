const University = require("../models/University");

exports.getAllUniversitys = (req, res) => {
  console.log("Getting all Universitys");
  University.getAll((err, universitys) => {
    console.log(universitys);
    if (err) return res.status(500).json({ error: err.message });
    res.json(universitys);
  });
};

exports.getUniversityById = (req, res) => {
  const { id } = req.params;
  University.getById(id, (err, university) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!university) return res.status(404).json({ message: "university not found" });
    res.json(university);
  });
};

exports.addUniversity = (req, res) => {
  const { abv, full_name } = req.body;
  University.create({ abv, full_name }, (err, newUniversity) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newUniversity);
  });
};

exports.deleteUniversity = (req, res) => {
  const { id } = req.params;
  University.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "university not found" });
    res.json({ message: "university deleted successfully" });
  });
};

exports.updateUniversity = (req, res) => {
  const { id } = req.params;
  const { abv, full_name } = req.body;

  University.updateById(id, { abv, full_name }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "University not found or no changes made" });
    res.json({ message: "University updated successfully" });
  });
};