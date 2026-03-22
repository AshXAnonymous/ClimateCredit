require("dotenv").config();  

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const industryRoutes = require("./routes/industryRoutes");
const profileRoutes = require("./routes/profileRoutes");
const reportRoutes = require("./routes/reportRoutes");
const contactRoutes = require("./routes/contactRoutes");





// Middleware — must be before routes
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://climatecredit.vercel.app",
}));


app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running ✅" });
});

app.use("/api", reportRoutes);

// Use auth routes here
app.use("/api/auth", authRoutes);
//admin routes
app.use("/api/admin", adminRoutes);
// Industry and profile routes
app.use("/industries", industryRoutes);
// Profile routes
app.use("/profile", profileRoutes);
// Connect DB and start server
app.use("/api", contactRoutes);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGO URI:", process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 8080, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 8080}`)
    );
  })
  .catch((err) => console.error("❌ DB connection error:", err));
