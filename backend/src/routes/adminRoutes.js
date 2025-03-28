const express = require("express");
const { getAllAdmins, getAdminById, addAdmin, deleteAdmin, updateAdmin } = require("../controllers/adminController");

const router = express.Router();

router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.post("/", addAdmin);
router.delete("/:id", deleteAdmin);
router.put("/:id", updateAdmin);

module.exports = router;
