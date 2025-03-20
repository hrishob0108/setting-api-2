require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require ("./models/user");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database", err));

// POST API to Store User Data
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    // Validate required fields
    if (!name || !email || !age) {
      return res.status(400).json({ message: "Validation error: Missing required fields" });
    }

    // Create new user
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
