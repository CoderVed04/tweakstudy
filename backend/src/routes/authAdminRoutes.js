const express = require("express");
const router = express.Router();
const authAdminController = require("../controllers/authAdminController");
const rateLimit = require("express-rate-limit");

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per IP
  message: "Too many requests, please try again later."
});

router.use(limiter);


// User Login
router.post("/adminLogin", authAdminController.adminLogin);

// Logout Route
router.post("/adminLogout", authAdminController.adminLogout);

module.exports = router;