const Testimonial = require("../models/Testimonial");
const Media = require("../models/Media");
const Rajcen = require("../models/Rajcen");
const Product = require("../models/Product");

// Get Testimonials..

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    return res.status(200).json({ success: true, testimonials });
  } catch (err) {
    console.error("Get Testimonials Error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch testimonials" });
  }
};

// Get Media..

exports.getMedia = async (req, res) => {
  try {
    const media = await Media.find().populate("titleId");
    return res.status(200).json({ success: true, media });
  } catch (err) {
    console.error("Get Media Error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch media" });
  }
};

// Get Rajcen..

exports.getRajcen = async (req, res) => {
  try {
    const rajcen = await Rajcen.find();
    return res.status(200).json({ success: true, rajcen });
  } catch (err) {
    console.error("Get Centers Error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch centers" });
  }
};

// Get Products..

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ success: true, products });
  } catch (err) {
    console.error("Get Products Error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};
