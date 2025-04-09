const express = require("express");
const { getAllBranchs, getBranchById, addBranch, deleteBranch, updateBranch } = require("../controllers/branchController");
const { authenticateAdminToken } = require("../controllers/authAdminController");

const router = express.Router();

router.get("/", authenticateAdminToken, getAllBranchs);
router.get("/:id", authenticateAdminToken, getBranchById);
router.post("/", authenticateAdminToken, addBranch);
router.delete("/:id", authenticateAdminToken, deleteBranch);
router.put("/:id", authenticateAdminToken, updateBranch);

module.exports = router;