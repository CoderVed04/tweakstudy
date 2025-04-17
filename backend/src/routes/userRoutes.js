const express = require("express");
const { getAllUsers, getUserById,  deleteUser, updateUser } = require("../controllers/userController");
const { authenticateAdminToken } = require("../controllers/authAdminController");  

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", authenticateAdminToken, deleteUser);
router.put("/:id", authenticateAdminToken, updateUser);

module.exports = router;