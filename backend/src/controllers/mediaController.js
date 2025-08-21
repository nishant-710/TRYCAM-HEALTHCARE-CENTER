const MediaTitle = require("../models/MediaTitle");
const Media = require("../models/Media");
const Admin = require("../models/Admin");
const fs = require("fs");
const path = require("path");

// Titles Show..

exports.titleShow = async (req, res) => {
  try {
    const [admin, title] = await Promise.all([
      Admin.findById(req.user.id),
      MediaTitle.find(),
    ]);
    res.render("admin/mediaTitlesShow", {
      admin,
      title,
      activePage: "media-titles",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load titles.." });
  }
};

// Titles Add Show..

exports.titleAddShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    res.render("admin/mediaTitlesAdd", { admin, activePage: "media-titles" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Titles Add..

exports.titleAdd = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name?.trim()) {
      return res.status(400).json({ message: "Title name is required" });
    }

    const exists = await MediaTitle.findOne({ name: name.trim() });
    if (exists) {
      return res.status(400).json({ message: "Title already exists" });
    }

    const title = await MediaTitle.create({ name: name.trim() });
    res.status(201).json({ message: "Title added successfully", title });
  } catch (err) {
    console.error("Add Title Error:", err.message);
    res.status(500).json({ message: "Failed to add title" });
  }
};

// Titles Edit Show..

exports.titleEditShow = async (req, res) => {
  try {
    const { id } = req.params;

    const [admin, title] = await Promise.all([
      Admin.findById(req.user.id),
      MediaTitle.findById(id),
    ]);

    if (!title) {
      return res.status(404).json({ message: "title not found" });
    }

    res.render("admin/mediaTitlesEdit", {
      admin,
      title,
      activePage: "media-titles",
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Failed to load.." });
  }
};

// Edit Titles Edit..

exports.titleEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ message: "Title name is required" });
    }

    const updated = await MediaTitle.findByIdAndUpdate(
      id,
      { name: name.trim() },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Title not found" });
    }

    res.status(200).json({ message: "Title updated successfully", updated });
  } catch (err) {
    console.error("Edit Title Error:", err.message);
    res.status(500).json({ message: "Failed to update title" });
  }
};

// Titles delete..

exports.titleDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await MediaTitle.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Title not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Title deleted successfully" });
  } catch (err) {
    console.error("Delete Title Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to delete title" });
  }
};

// Media Show..

exports.mediaShow = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    const media = await MediaTitle.aggregate([
      {
        $lookup: {
          from: "media",
          localField: "_id",
          foreignField: "titleId",
          as: "medias",
        },
      },
      { $sort: { name: 1 } },
    ]);

    res.render("admin/mediaShow", { media, admin, activePage: "media" });
  } catch (err) {
    console.error("Show Media Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to load media." });
  }
};

// Media Add Show..

exports.mediaAddShow = async (req, res) => {
  try {
    const [admin, title] = await Promise.all([
      Admin.findById(req.user.id),
      MediaTitle.find().sort({ name: 1 }),
    ]);
    res.render("admin/mediaAdd", { admin, title, activePage: "media" });
  } catch (err) {
    console.error("Render Add Media Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to load.." });
  }
};

// Media Add..

exports.mediaAdd = async (req, res) => {
  try {
    const { titleId } = req.body;

    if (!titleId) {
      return res.status(400).json({
        success: false,
        message: "Title ID is required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const mediaData = req.files.map((file) => ({
      titleId,
      file: `media/${file.filename}`,
      fileType: file.mimetype.startsWith("image") ? "image" : "video",
    }));

    const medias = await Media.insertMany(mediaData);

    res.status(201).json({
      success: true,
      message: "Media added successfully",
      medias,
    });
  } catch (error) {
    console.error("Error adding media:", error.message);

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        const filePath = path.join(
          __dirname,
          "../../public/uploads/media",
          file.filename
        );
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Media Delete..

exports.mediaDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const media = await Media.findById(id);
    if (!media) {
      return res
        .status(404)
        .json({ success: false, message: "Media not found" });
    }

    const filePath = path.join(__dirname, "../../public/uploads", media.file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Media.findByIdAndDelete(id);

    res.json({ success: true, message: "Media deleted successfully" });
  } catch (error) {
    console.error("Delete Media error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Media Edit Show..

exports.mediaEditShow = async (req, res) => {
  try {
    const { id } = req.params;

    const [admin, media] = await Promise.all([
      Admin.findById(req.user.id),
      Media.findById(id),
    ]);
    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    const titles = await MediaTitle.find();

    res.render("admin/mediaEdit", {
      admin,
      media,
      titles,
      activePage: "media",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Media Edit..

exports.mediaEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { titleId } = req.body;

    if (!titleId) {
      return res.status(400).json({ message: "Title ID is required" });
    }

    const updatedMedia = await Media.findByIdAndUpdate(
      id,
      { titleId },
      { new: true }
    );

    if (!updatedMedia) {
      return res.status(404).json({ message: "Media not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Media updated successfully",
      updatedMedia,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};
