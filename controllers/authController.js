const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res) => {
  // Registration logic
  res.send("Register Successfully");
};

exports.login = async (req, res) => {
  // Login logic
  res.send("Login Successfully");
};

exports.forgotPassword = (req, res) => {
  res.send("Forgot Password endpoint");
};

exports.resetPassword = (req, res) => {
  res.send("Reset Password endpoint");
};
