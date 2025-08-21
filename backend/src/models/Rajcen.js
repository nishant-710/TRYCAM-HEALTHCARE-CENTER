const mongoose = require("mongoose");

const rajcenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    email: {
      type: String,
      default: "[Email not available]",
      lowercase: true,
    },
    contact: {
      type: String,
      default: "[Contact No. not available]",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Rajcen", rajcenSchema);
