const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  industryName: {
    type: String,
    required: true,
    trim: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    minlength: 20,
  },

  image: {
    type: String, // store image URL or filename
    default: null,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  status: {
    type: String,
    enum: ["pending", "verified", "rejected"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", reportSchema);
