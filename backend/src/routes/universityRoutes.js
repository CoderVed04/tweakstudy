const express = require("express");
const { getAllUniversitys, getUniversityById, addUniversity, deleteUniversity, updateUniversity } = require("../controllers/universityController");

const router = express.Router();

router.get("/", getAllUniversitys);
router.get("/:id", getUniversityById);
router.post("/", addUniversity);
router.delete("/:id", deleteUniversity);
router.put("/:id", updateUniversity);

module.exports = router;