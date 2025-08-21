const Product = require("../models/Product");
const Admin = require("../models/Admin");
const fs = require("fs");
const path = require("path");

// Products Show..

exports.productShow = async (req, res) => {
  try {
    const [admin, product] = await Promise.all([
      Admin.findById(req.user.id),
      Product.find(),
    ]);
    res.render("admin/productsShow", {
      admin,
      product,
      activePage: "products",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load products.." });
  }
};

// Products Add Show..

exports.productAddShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    res.render("admin/productsAdd", {
      admin,
      activePage: "products",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Products Add..

exports.productAdd = async (req, res) => {
  try {
    const { name, price, description, offerPrice } = req.body;

    if (!name || !price || !description || !req.file) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (parseInt(offerPrice) >= parseInt(price)) {
      return res.status(400).json({
        success: false,
        message: "Offer price must be less than original price",
      });
    }

    const product = new Product({
      name,
      price,
      offerPrice,
      description,
      image: `products/${req.file.filename}`,
    });

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);

    if (req.file) {
      const filePath = path.join(
        __dirname,
        "../../public/uploads/products",
        req.file.filename
      );
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Product Delete..

exports.productDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.image) {
      const filePath = path.join(
        __dirname,
        "../../public/uploads/",
        product.image
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Product Edit Show..

exports.productEditShow = async (req, res) => {
  try {
    const { id } = req.params;

    const [admin, product] = await Promise.all([
      Admin.findById(req.user.id),
      Product.findById(id),
    ]);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.render("admin/productsEdit", {
      product,
      admin,
      activePage: "products",
    });
  } catch (error) {
    console.error("Error rendering product edit page:", error.message);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

// Product Edit..

exports.productEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, offerPrice } = req.body;

    if (parseInt(offerPrice) >= parseInt(price)) {
      return res.status(400).json({
        success: false,
        message: "Offer price must be less than original price",
      });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (req.file) {
      if (product.image) {
        const oldImagePath = path.join(
          __dirname,
          "../../public/uploads",
          product.image
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      product.image = `products/${req.file.filename}`;
    }

    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;
    if (offerPrice) {
      product.offerPrice = offerPrice;
    } else {
      product.offerPrice = null;
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
