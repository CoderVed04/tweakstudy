const express = require("express");
const { getAllBranchs, getBranchById, addBranch, deleteBranch, updateBranch } = require("../controllers/branchController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticateToken, getAllBranchs);
router.get("/:id", authenticateToken, getBranchById);
router.post("/", authenticateToken, addBranch);
router.delete("/:id", authenticateToken, deleteBranch);
router.put("/:id", authenticateToken, updateBranch);

module.exports = router;