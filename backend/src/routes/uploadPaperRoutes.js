const express = require("express");
const { getAllUploadPapers, getUploadPaperById, addUploadPaper, deleteUploadPaper, updateUploadPaper, downloadFile } = require("../controllers/uploadPaperController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();
const upload = require("../middlewares/upload");

router.get("/", getAllUploadPapers);
router.get("/:id", getUploadPaperById);
router.post("/", authenticateToken, upload.single("file"), addUploadPaper);
router.delete("/:id", authenticateToken, deleteUploadPaper);
router.put("/:id", authenticateToken, upload.single("file"), updateUploadPaper);
router.get("/download/:filename", downloadFile);

module.exports = router;
