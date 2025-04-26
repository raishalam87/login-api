const nodemailer = require("nodemailer");

const sendEmail = async (to, name, resetUrl = null) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"CodePro Academy" <${process.env.EMAIL_USER}>`,
      to,
      subject: resetUrl ? "Reset Your Password" : "Login Successful 🎉",
      html: resetUrl
        ? `<h3>Hi ${name},</h3><p>Click to reset: <a href="${resetUrl}">Reset Password</a></p>`
        : `<h3>Hi ${name},</h3><p>You have successfully logged in 🚀</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return true;
  } catch (error) {
    console.error("❌ Email failed:", error);
    return false;
  }
};

module.exports = sendEmail;
