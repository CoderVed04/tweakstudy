const express = require("express");
const { getAllColleges, getCollegeById, addCollege, deleteCollege, updateCollege } = require("../controllers/collegeController");

const router = express.Router();

router.get("/", getAllColleges);
router.get("/:id", getCollegeById);
router.post("/", addCollege);
router.delete("/:id", deleteCollege);
router.put("/:id", updateCollege);

module.exports = router;
