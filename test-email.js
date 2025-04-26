const nodemailer = require("nodemailer");

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "khanraish77039@gmail.com",  // Replace with your email
      pass: "sehs rzcz vvfw vvxy",       // Replace with your Gmail App Password
    },
  });

  const mailOptions = {
    from: `"CodePro Academy" <khanraish77039@gmail.com>`,
    to: "gnhotel83@gmail.com", // Replace with the email you want to test
    subject: "Test Email",
    text: "This is a test email from your Node.js app.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Test email sent:", info.response);
  } catch (error) {
    console.log("Error sending test email:", error);
  }
}

sendTestEmail();
