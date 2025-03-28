const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = (req, res) => {
  const { fname, lname, dob , email, clg_name, contact_no, userid, password, confirm_password, gender } = req.body;

  // Check if passwords match
  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Image upload handling
  const image = req.file ? req.file.filename : null;

  // Check if user already exists
  User.findByUsername(userid, (err, existingUser) => {
    if (err) return res.status(500).json({ error: err.message });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    // Register the user
    User.register({ fname, lname, dob, email, clg_name, contact_no, userid, password, gender, image }, (err, newUser) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User registered successfully", user: newUser });
    });
  });
};

exports.login = (req, res) => {
  const { userid, password } = req.body;

  // Find user by username
  User.findByUsername(userid, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

      // Generate Token
      const token = jwt.sign({ id: user.id, userid: user.userid }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ message: "Login successful", token });
    });
  });
};
