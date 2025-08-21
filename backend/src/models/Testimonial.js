const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    file: { type: String, required: true },
    fileType: { type: String, enum: ["image", "video"], required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
