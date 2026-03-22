const User = require("../models/User");
const Industry = require("../models/Industry");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

require("dotenv").config();

// ================= REGISTER =================
exports.register = async (req, res) => {
  console.log("Register request body:", req.body);

  try {
    const {
      username,
      email,
      password,
      role,
      industry,
      industryCategory,
      industryLocation
    } = req.body;
    // ✅ ADD THIS CHECK
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All required fields are missing"
      });
    }
    // 1️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Normalize role
    let finalRole = role ? role.toLowerCase() : "user";
    if (finalRole === "industry") finalRole = "owner";
    if (email === process.env.ADMIN_EMAIL) finalRole = "admin";

    // 4️⃣ Create verification token
    const verificationToken = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 5️⃣ CREATE USER FIRST (NO industry yet)
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: finalRole,
      verificationToken,
    });

    await newUser.save();

    // 6️⃣ CREATE INDUSTRY ONLY FOR OWNER
    if (finalRole === "owner") {
      if (
        !industry ||
        !industryCategory ||
        !industryLocation ||
        !industryLocation.city ||
        !industryLocation.country
      ) {
        return res.status(400).json({
          message: "Industry name, sector and valid location are required",
        });
      }

      const industryDoc = await Industry.create({
        name: industry,
        sector: industryCategory,      // ✅ schema match
        location: industryLocation,    // ✅ object
        owner: newUser._id,             // ✅ REQUIRED
      });

      // Link industry to user
      newUser.industry = industryDoc._id;
      await newUser.save();
    }

    // 7️⃣ Send verification email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verifyLink = `${process.env.BASE_URL}/api/auth/verify-email?token=${verificationToken}`;

    await transporter.sendMail({
      to: email,
      subject: "Verify Your Email",
      html: `<p>Click <a href="${verifyLink}">here</a> to verify your email.</p>`,
    });

    return res.status(201).json({
      message: "User registered. Please check your email for verification.",
    });

   } catch (err) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
};

// ================= VERIFY EMAIL =================
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.json({ message: "Email already verified" });
    }

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    return res.json({ message: "Email verified successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Verification link expired or invalid" });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).populate("industry");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email first" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login successful",
      token,
      role: user.role,
      userId: user._id,
      username: user.username,
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ================= FORGOT PASSWORD =================
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const resetLink = `${process.env.BASE_URL}/reset-password.html?token=${token}`;

  await transporter.sendMail({
    to: user.email,
    subject: "Password Reset",
    text: `Click here to reset: ${resetLink}`,
  });

  res.json({ message: "Password reset link sent to your email" });
};

// ================= RESET PASSWORD =================
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.json({ message: "Password has been reset successfully" });
};

// ================= LOGOUT =================
exports.logout = (req, res) => {
  return res.json({ message: "Logged out successfully" });
};
