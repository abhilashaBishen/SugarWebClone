const express = require("express");
const dashboardRouter = express.Router();

// Route to handle registration
dashboardRouter.get("/", async (req, res) => {
  res.status(200).json({ message: "dashboard data fetched successfully" });
});


module.exports = dashboardRouter;
