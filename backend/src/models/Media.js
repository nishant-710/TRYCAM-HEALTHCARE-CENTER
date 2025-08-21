const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    titleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MediaTitle",
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    fileType: { type: String, enum: ["image", "video"], required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Media", mediaSchema);
