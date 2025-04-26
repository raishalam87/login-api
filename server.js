const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");  // Ensure this is correct

// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();

// Connect to the MongoDB database
connectDB();  // Call the connectDB function

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Importing Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Root route for health check (optional)
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Server listening on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ API is running on http://localhost:${PORT}`);
});
