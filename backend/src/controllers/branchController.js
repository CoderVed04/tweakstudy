const Branch = require("../models/Branch");

exports.getAllBranchs = (req, res) => {
  console.log("Getting all branch");
  Branch.getAll((err, branchs) => {
    console.log(branchs);
    if (err) return res.status(500).json({ error: err.message });
    res.json(branchs);
  });
};

exports.getBranchById = (req, res) => {
  const { id } = req.params;
  Branch.getById(id, (err, branch) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!branch) return res.status(404).json({ message: "branch not found" });
    res.json(branch);
  });
};

exports.addBranch = (req, res) => {
  const { b_name, uni_id} = req.body;
  Branch.create({ b_name, uni_id }, (err, newBranch) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newBranch);
  });
};

exports.deleteBranch = (req, res) => {
  const { id } = req.params;
  Branch.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "branch not found" });
    res.json({ message: "branch deleted successfully" });
  });
};

exports.updateBranch = (req, res) => {
  const { id } = req.params;
  const { b_name, uni_id} = req.body;

  Branch.updateById(id, {b_name, uni_id}, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "branch not found or no changes made" });
    res.json({ message: "branch updated successfully" });
  });
};