const Faq = require("../models/Faq");

exports.getAllFaqs = (req, res) => {
  console.log("Getting all Faqs");
  Faq.getAll((err, faqs) => {
    console.log(faqs);
    if (err) return res.status(500).json({ error: err.message });
    res.json(faqs);
  });
};

exports.getFaqById = (req, res) => {
  const { id } = req.params;
  Faq.getById(id, (err, faq) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!faq) return res.status(404).json({ message: "Faq not found" });
    res.json(faq);
  });
};

exports.addFaq = (req, res) => {
  const { que_id} = req.body;
  Faq.create({que_id}, (err, newFaq) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newFaq);
  });
};

exports.deleteFaq = (req, res) => {
  const { id } = req.params;
  Faq.deleteById(id, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Faq not found" });
    res.json({ message: "Faq deleted successfully" });
  });
};

exports.updateFaq = (req, res) => {
  const { id } = req.params;
  const { que_id} = req.body;

  Faq.updateById(id, { que_id }, (err, success) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!success) return res.status(404).json({ message: "Faq not found or no changes made" });
    res.json({ message: "Faq updated successfully" });
  });
};