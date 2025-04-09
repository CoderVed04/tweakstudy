const express = require("express");
const { getAllFaqs, getFaqById, addFaq, deleteFaq, updateFaq } = require("../controllers/faqController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllFaqs);
router.get("/:id", authenticateAdminToken, getFaqById);
router.post("/", authenticateAdminToken, addFaq);
router.delete("/:id", authenticateAdminToken, deleteFaq);
router.put("/:id", authenticateAdminToken, updateFaq);

module.exports = router;
