const express = require("express");
const { getAllAdmins, getAdminById, addAdmin, deleteAdmin, updateAdmin } = require("../controllers/adminController");
const { authenticateAdminToken } = require("../controllers/authAdminController");  

const router = express.Router();

router.get("/", authenticateAdminToken, getAllAdmins);
router.get("/:id", authenticateAdminToken, getAdminById);
router.post("/", authenticateAdminToken, addAdmin);
router.delete("/:id", authenticateAdminToken, deleteAdmin);
router.put("/:id", authenticateAdminToken, updateAdmin);

module.exports = router;
