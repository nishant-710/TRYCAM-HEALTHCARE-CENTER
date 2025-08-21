const express = require("express");
const adminAuthRoutes = require("./adminAuthRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use("/admin", adminAuthRoutes);
router.use("/admin", authMiddleware, adminRoutes);
router.use("/", userRoutes);

module.exports = router;
