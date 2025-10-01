const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Một route test đơn giản
app.get("/", (req, res) => {
  res.json({ message: "Xin chào, đây là ứng dụng ContactBook!" });
});

module.exports = app;