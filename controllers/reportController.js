const Report = require("../models/Report"); // ✅ REQUIRED

exports.createReport = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const {
      industryName,
      location,
      description,
      email,
      phone,
    } = req.body;

    if (!industryName || !location || !description || !email || !phone) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    if (description.length < 20) {
      return res.status(400).json({ message: "Description must be at least 20 characters" });
    }

    const report = await Report.create({
      industryName,
      location,
      description,
      email,
      phone,
      image: req.file ? req.file.filename : null,
      reportedBy: req.user ? req.user.id : null,
    });

    return res.status(201).json({
      message: "Pollution report submitted successfully",
      report,
    });

  } catch (error) {
    console.error("REPORT ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
