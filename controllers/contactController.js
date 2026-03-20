const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (message.length < 10) {
      return res.status(400).json({
        message: "Message must be at least 10 characters",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
