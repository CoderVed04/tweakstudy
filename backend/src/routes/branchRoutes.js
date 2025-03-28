const express = require("express");
const { getAllBranchs, getBranchById, addBranch, deleteBranch, updateBranch } = require("../controllers/branchController");

const router = express.Router();

router.get("/", getAllBranchs);
router.get("/:id", getBranchById);
router.post("/", addBranch);
router.delete("/:id", deleteBranch);
router.put("/:id", updateBranch);

module.exports = router;