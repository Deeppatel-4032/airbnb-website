// core module
const path = require("path");
const express = require("express");
const userRoute = express.Router();

// local module
const rootPath = require("../utils/pathUtil");
const { registerHome } = require("./adminRouter");

userRoute.get("/", (req, res) => {
  console.log("registerHomeDitels", registerHome);
  res.sendFile(path.join(rootPath, "views", "home.html"));
});

module.exports = userRoute;
