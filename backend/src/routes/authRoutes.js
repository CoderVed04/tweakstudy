const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const upload = require("../middlewares/upload");

// User Registration (With Image Upload)
router.post("/register", upload.single("image"), authController.register);

// User Login
router.post("/login", authController.login);

module.exports = router;
