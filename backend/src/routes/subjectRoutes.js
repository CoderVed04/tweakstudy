const express = require("express");
const { getAllSubjects, getSubjectById, addSubject, deleteSubject, updateSubject, getAllImages } = require("../controllers/subjectController");
const { authenticateToken } = require("../controllers/authController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.get("/",  getAllSubjects);
router.get("/images/all", getAllImages);
router.get("/:id",  getSubjectById);
router.post("/",  upload.single("image"), addSubject);
router.delete("/:id", authenticateToken, deleteSubject);
router.put("/:id", authenticateToken, upload.single("image"), updateSubject);

module.exports = router;
