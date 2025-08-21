const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("MediaTitle", titleSchema);
