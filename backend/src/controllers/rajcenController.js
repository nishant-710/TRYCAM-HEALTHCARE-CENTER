const Admin = require("../models/Admin");
const Rajcen = require("../models/Rajcen");

// Rajcen Show..

exports.rajcenShow = async (req, res) => {
  try {
    const [admin, rajcen] = await Promise.all([
      Admin.findById(req.user.id),
      Rajcen.find(),
    ]);
    res.render("admin/rajcenShow", {
      admin,
      rajcen,
      activePage: "rajasthan-centers",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load Centers.." });
  }
};

// Rajcen Add Show..

exports.rajcenAddShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    res.render("admin/rajcenAdd", { admin, activePage: "rajasthan-centers" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Rajcen Add..

exports.rajcenAdd = async (req, res) => {
  try {
    const { name, address, email, contact } = req.body;
    const details = { name, address };
    if (email) {
      details.email = email;
    }
    if (contact) {
      details.contact = contact;
    }

    const rajcen = new Rajcen(details);
    await rajcen.save();

    res.status(201).json({
      success: true,
      message: "Center added successfully",
      rajcen,
    });
  } catch (err) {
    console.error("Error adding Center:", err.message);
    res.status(400).json({
      success: false,
      message: err.message || "Failed to add Center",
    });
  }
};

// Rajcen Edit Show..

exports.rajcenEditShow = async (req, res) => {
  try {
    const { id } = req.params;

    const [admin, rajcen] = await Promise.all([
      Admin.findById(req.user.id),
      Rajcen.findById(id),
    ]);

    if (!rajcen) {
      return res.status(404).json({ message: "Center not found" });
    }

    res.render("admin/rajcenEdit", {
      admin,
      rajcen,
      activePage: "rajasthan-centers",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Rajcen Edit..

exports.rajcenEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, email, contact } = req.body;
    const updatedDetails = { name, address };

    if (!name || !address) {
      return res.status(400).json({
        success: false,
        message: "Name and Address are required",
      });
    }

    if (email) {
      updatedDetails.email = email;
    }
    if (contact) {
      updatedDetails.contact = contact;
    }

    const updatedCenter = await Rajcen.findByIdAndUpdate(id, updatedDetails, {
      new: true,
      runValidators: true,
    });

    if (!updatedCenter) {
      return res.status(404).json({
        success: false,
        message: "Center not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Center updated successfully",
      updatedCenter,
    });
  } catch (err) {
    console.error("Error updating center:", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Rajcen Delete..

exports.rajcenDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Rajcen.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Center not found",
      });
    }

    res.json({
      success: true,
      message: "Center deleted successfully",
    });
  } catch (err) {
    console.error("Center delete error:", err.message);
    res.status(500).json({
      success: false,
      message: err.message || "Failed to delete Center",
    });
  }
};
