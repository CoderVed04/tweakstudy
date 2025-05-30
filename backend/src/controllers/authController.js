const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const csrf = require("csurf");
require("dotenv").config();

// CSRF Protection Middleware
// const csrfProtection = csrf({ cookie: true });

// User Registration
exports.register = (req, res) => {
  const { fname, lname, dob, email, clg_name, contact_no, userid, password, confirm_password, gender } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const image = req.file ? req.file.filename : null;

  // Check if user exists
  User.findByUsername(userid, (err, existingUser) => {
    if (err) return res.status(500).json({ error: err.message });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    User.register({ fname, lname, dob, email, clg_name, contact_no, userid, password, gender, image }, (err, newUser) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User registered successfully", user: newUser });
    });
  });
};

// User Login
exports.login = (req, res) => {
  const { userid, password } = req.body;

  User.findByUsername(userid, (err, user) => {
      console.log("Searching for user:", userid);
  console.log("Found user:", user);
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User not found" });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

      // Generate JWT Token
      const token = jwt.sign({ id: user.id, userid: user.userid }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "Strict" });
      res.json({ message: "Login successful", token });
    });
  });
};

// Logout User
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};

// Protected Route Example
// exports.protectedRoute = (req, res) => {
//   res.json({ message: "This is a protected route!", user: req.user });
// };

// Middleware to verify JWT token
exports.authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ message: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Get CSRF Token
// exports.getCSRFToken = (req, res) => {
//   res.json({ csrfToken: req.csrfToken() })
// };
