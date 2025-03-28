const express = require("express");
const { getAllFaqs, getFaqById, addFaq, deleteFaq, updateFaq } = require("../controllers/faqController");

const router = express.Router();

router.get("/", getAllFaqs);
router.get("/:id", getFaqById);
router.post("/", addFaq);
router.delete("/:id", deleteFaq);
router.put("/:id", updateFaq);

module.exports = router;
