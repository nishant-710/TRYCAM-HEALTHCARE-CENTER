const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/login", adminController.loginShow);
router.post("/login", adminController.login);

module.exports = router;
