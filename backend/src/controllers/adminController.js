const Admin = require("../models/Admin");

exports.getAllAdmins = (req, res) => {
  console.log("Getting all admins");
  Admin.getAll((err, admins) => {
    console.log(admins);
    if (err) return res.status(500).json({ error: err.message });
    res.json(admins);
  });
}

exports.getAdminById = (req, res) => {
  const { id } = req.params;
  Admin.getById(id, (err, admin) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!admin) return res.status(404).json({ message: "admin not found" });
    res.json(admin);
  });
};

exports.addAdmin = (req, res) => {
  const { userid, password, warning_cnt} = req.body;
  Admin.create({ userid, password, warning_cnt }, (err, newAdmin) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newAdmin);
  });
};

exports.deleteAdmin = (req, res) => {
  const { id } = req.params;
  Admin.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "admin not found" });
    res.json({ message: "admin deleted successfully" });
  });
};

exports.updateAdmin = (req, res) => {
  const { id } = req.params;
  const { userid, password, warning_cnt } = req.body;

  Admin.updateById(id, { userid, password, warning_cnt }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Admin not found or no changes made" });
    res.json({ message: "Admin updated successfully" });
  });
};