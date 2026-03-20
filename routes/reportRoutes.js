const express = require("express");
const router = express.Router();
const upload = require("../uploads/upload");
const { createReport } = require("../controllers/reportController");

// 🔴 ADD THIS TEMP TEST ROUTE
router.get("/report-test", (req, res) => {
  res.send("REPORT ROUTE WORKING");
});

// actual report API
router.post("/report", upload.single("image"), createReport);

module.exports = router;
