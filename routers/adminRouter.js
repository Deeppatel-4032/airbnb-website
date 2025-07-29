// core module
const path = require("path");

const express = require("express");
const adminRoute = express.Router();

// local module
const rootPath = require("../utils/pathUtil");

adminRoute.get("/add-homeForm", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "addHome.html"));
});

const registerHome = [];

adminRoute.post("/homeAdded", (req, res) => {
  console.log("Home Registeration successful for : ", req.body, req.body.name);
  const houseName = registerHome.push({ name: req.body.name });
  res.sendFile(path.join(rootPath, "views", "homeAdded.html"));
});

exports.adminRoute = adminRoute;
exports.registerHome = registerHome;
