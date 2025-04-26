const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword
} = require("../controllers/authController"); // ✅ make sure this path is correct and functions are properly exported

// All routes must point to functions, not undefined
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
