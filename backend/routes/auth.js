const express = require("express");
const authRouter = express.Router();

const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = process.env.SECRET_KEY || 'websiteClone';

// Route to handle registration
authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
//   const existingUser = users.find((user) => user.email === email);

console.log('---------password-------------', password);

  const existingUser = await User.findOne({email});
  console.log('---------existingUser-------------', existingUser);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  //  const hashedPassword =  await bcrypt.hash(password,10);
  // Adding a new user to the "database"
//   users.push({ email, password });

const newUser = new User({ email, password });

console.log('---------newUser-------------', newUser);
await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});

// Route for  login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Checking for the  if user exists
  const user = User.find((user) => user.email === email);
  if (!user || user.email !== email || user.password !== password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ status: 'S', message: "Login successful", token });
});

module.exports = authRouter;
