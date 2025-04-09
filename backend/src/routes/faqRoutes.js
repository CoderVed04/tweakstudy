const express = require("express");
const { getAllFaqs, getFaqById, addFaq, deleteFaq, updateFaq } = require("../controllers/faqController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllFaqs);
router.get("/:id", getFaqById);
router.post("/", authenticateToken, addFaq);
router.delete("/:id", authenticateToken, deleteFaq);
router.put("/:id", authenticateToken, updateFaq);

module.exports = router;
