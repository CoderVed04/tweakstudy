const User = require("../models/User");

exports.getAllUsers = (req, res) => {
  console.log("Getting all Users");
  User.getAll((err, users) => {
    console.log(users);
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
}

exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findByUsername(id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "user not found" });
    res.json(user);
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { fname, lname, dob, email, clg_name, contact_no, userid, hashedPassword, gender, image } = req.body;

  User.updateById(id, { fname, lname, dob, email, clg_name, contact_no, userid, hashedPassword, gender, image }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "User not found or no changes made" });
    res.json({ message: "User updated successfully" });
  });
};