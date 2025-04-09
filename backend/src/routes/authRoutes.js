const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const upload = require("../middlewares/upload");
const rateLimit = require("express-rate-limit");

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per IP
  message: "Too many requests, please try again later."
});

router.use(limiter);

// User Registration (With Secure File Upload)
router.post("/register", upload.single("image"), authController.register);

// User Login
router.post("/login", authController.login);

// CSRF Token Route
// router.get("/csrf-token", authController.getCSRFToken);

// Logout Route
router.post("/logout", authController.logout);

// Protected Route
// router.get("/protected", authController.authenticateToken, authController.protectedRoute);

module.exports = router;