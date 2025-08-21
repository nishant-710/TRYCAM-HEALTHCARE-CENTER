const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const Admin = require("../models/Admin");
const Media = require("../models/Media");
const Rajcen = require("../models/Rajcen");
const Product = require("../models/Product");
const Testimonial = require("../models/Testimonial");

// Login Show..

exports.loginShow = (req, res) => {
  try {
    res.render("admin/login");
  } catch (error) {
    console.error("Error rendering login page:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Login..

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: false,
      // secure: true
    });

    await admin.save();

    return res.status(200).json({
      message: "Login successful",
      token,
      redirect: "/admin/dashboard",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Login failed" });
  }
};

// Logout..

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res.status(200).json({ message: "Logged out.." });
  } catch (err) {
    console.error("Logout Error:", err.message);
    res.status(500).json({ message: "Logout failed" });
  }
};

// Dashboard Show..

exports.dashboardShow = async (req, res) => {
  try {
    const [admin, media, products, rajcen, testimonials] = await Promise.all([
      Admin.findById(req.user.id),
      Media.countDocuments(),
      Product.countDocuments(),
      Rajcen.countDocuments(),
      Testimonial.countDocuments(),
    ]);
    res.render("admin/dashboard", {
      admin,
      media,
      products,
      rajcen,
      testimonials,
      activePage: "dashboard",
    });
  } catch (err) {
    console.error("Dashboard Error:", err.message);
    res.status(500).json({ message: "Failed to load dashboard." });
  }
};

// Edit Profile Show..

exports.editProfileShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    res.render("admin/edit-profile", { admin, activePage: "edit-profile" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Edit Profile..

exports.editProfile = async (req, res) => {
  try {
    const id = req.user.id;
    const { name, oldPassword, newPassword } = req.body;
    const image = req?.file?.filename;
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Name is required" });
    }

    const updatedDetails = { name: name.trim() };

    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, admin.password);
      if (!isMatch)
        return res.status(400).json({ message: "Invalid Old Password" });
      const hash = await bcrypt.hash(newPassword, 10);
      updatedDetails.password = hash;
    }

    if (image) {
      if (admin.image && admin.image != "profile-image/admin.png") {
        const oldImagePath = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "uploads",
          admin.image
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error("Error deleting old image:", err);
          else console.log("Old image deleted:", admin.image);
        });
      }
      updatedDetails.image = "profile-image/" + image;
    }

    await Admin.findByIdAndUpdate(id, updatedDetails, {
      new: true,
    });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    return res.status(200).json({ message: "Admin details updated" });
  } catch (err) {
    console.error("Edit Profile Error:", err.message);

    if (req.file) {
      const filePath = path.join(
        __dirname,
        "../../public/uploads/profile-image",
        req.file.filename
      );
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Remove Profile Photo..

exports.removeProfileImage = async (req, res) => {
  try {
    const id = req.user.id;
    const admin = await Admin.findById(id);

    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    if (admin.image && admin.image != "profile-image/admin.png") {
      const imagePath = path.join(
        __dirname,
        "../../public/uploads/",
        admin.image
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    admin.image = "profile-image/admin.png";
    await admin.save();

    return res
      .status(200)
      .json({ success: true, message: "Profile image removed" });
  } catch (err) {
    console.error("Remove Profile Image Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
