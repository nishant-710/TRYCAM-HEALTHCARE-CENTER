const Testimonial = require("../models/Testimonial");
const Admin = require("../models/Admin");
const path = require("path");
const fs = require("fs");

// Testimonial Show..

exports.testimonialShow = async (req, res) => {
  try {
    const [admin, testimonial] = await Promise.all([
      Admin.findById(req.user.id),
      Testimonial.find(),
    ]);
    res.render("admin/testimonialsShow", {
      admin,
      testimonial,
      activePage: "testimonials",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load testimonials.." });
  }
};

// Testimonial Add Show..

exports.testimonialAddShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    res.render("admin/testimonialsAdd", { admin, activePage: "testimonials" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Add Testimonials..

exports.testimonialAdd = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const testimonialsData = req.files.map((file) => ({
      file: `testimonials/${file.filename}`,
      fileType: file.mimetype.startsWith("image") ? "image" : "video",
    }));

    const testimonials = await Testimonial.insertMany(testimonialsData);

    res.status(201).json({
      success: true,
      message: "Testimonials added successfully",
      testimonials,
    });
  } catch (error) {
    console.error("Error adding testimonials:", error.message);

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        const filePath = path.join(
          __dirname,
          "../../public/uploads/testimonials",
          file.filename
        );
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete Testimonials..

exports.testimonialDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }

    const filePath = path.join(
      __dirname,
      "../../public/uploads",
      testimonial.file
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Testimonial.findByIdAndDelete(id);

    res.json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Delete testimonial error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
