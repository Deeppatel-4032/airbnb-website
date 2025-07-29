const express = require("express");
const adminRoute = express.Router();
const registerHome = [];

adminRoute.get("/add-homeForm", (req, res) => {
  res.render("addHome", {
    pageTitle: "Add Home To Airbnb",
    currantPage: "addHome",
  });
});

adminRoute.post("/homeAdded", (req, res) => {
  console.log("Home Registeration successful for : ", req.body);
  registerHome.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currantPage: "homeAdded",
  });
});

exports.adminRoute = adminRoute;
exports.registerHome = registerHome;
