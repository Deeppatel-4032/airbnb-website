// core module
const express = require("express");
const userRoute = express.Router();

// local module
const { registerHome } = require("./adminRouter");

userRoute.get("/", (req, res) => {
  res.render("home", {
    homes: registerHome,
    pageTitle: "airbnb Home.com",
    currantPage: "home",
  });
});

module.exports = userRoute;
