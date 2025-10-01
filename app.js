const express = require("express");
const cors = require("cors");

const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRouter);

// Route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Xin chào, đây là ứng dụng ContactBook!" });
});

// Xử lý 404 - route không tồn tại
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
