const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/testimonials", userController.getTestimonials);
router.get("/media", userController.getMedia);
router.get("/rajcen", userController.getRajcen);
router.get("/products", userController.getProducts);

module.exports = router;
