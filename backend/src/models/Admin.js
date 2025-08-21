const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    mobile: { type: String, default: null },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: { type: String, default: "profile-image/admin.png" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Admin", adminSchema);
