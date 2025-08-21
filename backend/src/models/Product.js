const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: 100,
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be positive"],
    },
    offerPrice: {
      type: Number,
      default: null,
      min: [0, "Offer price must be positive"],
      validate: {
        validator: function (v) {
          return v === null || v < this.price;
        },
        message: "Offer price must be less than original price",
      },
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
