const express = require("express");
const adminController = require("../controllers/adminController");
const testimonialController = require("../controllers/testimonialController");
const rajcenController = require("../controllers/rajcenController");
const mediaController = require("../controllers/mediaController");
const productController = require("../controllers/productController");
const uploadMiddleware = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/logout", adminController.logout);
router.get("/dashboard", adminController.dashboardShow);
router.get("/edit-profile", adminController.editProfileShow);
router.post(
  "/edit-profile",
  uploadMiddleware("profile-image").single("image"),
  adminController.editProfile
);
router.post("/remove-profile-image", adminController.removeProfileImage);

router.get("/testimonials", testimonialController.testimonialShow);
router.get("/testimonials/add", testimonialController.testimonialAddShow);
router.post(
  "/testimonials/add",
  uploadMiddleware("testimonials").array("file"),
  testimonialController.testimonialAdd
);
router.post(
  "/testimonials/delete/:id",
  testimonialController.testimonialDelete
);

router.get("/rajasthan-centers", rajcenController.rajcenShow);
router.get("/rajasthan-centers/add", rajcenController.rajcenAddShow);
router.post("/rajasthan-centers/add", rajcenController.rajcenAdd);
router.get("/rajasthan-centers/edit/:id", rajcenController.rajcenEditShow);
router.post("/rajasthan-centers/edit/:id", rajcenController.rajcenEdit);
router.post("/rajasthan-centers/delete/:id", rajcenController.rajcenDelete);

router.get("/media-titles", mediaController.titleShow);
router.get("/media-titles/add", mediaController.titleAddShow);
router.post("/media-titles/add", mediaController.titleAdd);
router.get("/media-titles/edit/:id", mediaController.titleEditShow);
router.post("/media-titles/edit/:id", mediaController.titleEdit);
router.post("/media-titles/delete/:id", mediaController.titleDelete);

router.get("/media", mediaController.mediaShow);
router.get("/media/add", mediaController.mediaAddShow);
router.post(
  "/media/add",
  uploadMiddleware("media").array("file"),
  mediaController.mediaAdd
);
router.post("/media/delete/:id", mediaController.mediaDelete);
router.get("/media/edit/:id", mediaController.mediaEditShow);
router.post("/media/edit/:id", mediaController.mediaEdit);

router.get("/products", productController.productShow);
router.get("/products/add", productController.productAddShow);
router.post(
  "/products/add",
  uploadMiddleware("products").single("image"),
  productController.productAdd
);
router.post("/products/delete/:id", productController.productDelete);
router.get("/products/edit/:id", productController.productEditShow);
router.post(
  "/products/edit/:id",
  uploadMiddleware("products").single("image"),
  productController.productEdit
);

module.exports = router;
