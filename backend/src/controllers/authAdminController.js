const AdminAuth = require("../models/AdminAuth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// User Login
exports.adminLogin = (req, res) => {
  const { userid, password } = req.body;

  AdminAuth.findByAdminname(userid, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "admin not found" });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ message: "Invalid admin credentials" });

      // Generate JWT Token
      const adminToken = jwt.sign({ id: user.id, userid: user.userid }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.cookie("adminToken", adminToken, { httpOnly: true, secure: true, sameSite: "Strict" });
      res.json({ message: "admin Login successful", adminToken });
    });
  });
};

// Logout User
exports.adminLogout = (req, res) => {
  res.clearCookie("adminToken");
  res.json({ message: "admin Logout successful" });
};

// Middleware to verify JWT token
exports.authenticateAdminToken = (req, res, next) => {
  const adminToken = req.cookies.adminToken;
  if (!adminToken) return res.status(403).json({ message: "Access denied" });

  jwt.verify(adminToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid admin token" });
    req.user = user;
    next();
  });
};
