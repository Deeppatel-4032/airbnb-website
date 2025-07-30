const express = require("express");
const adminRoute = express.Router();

// local module
const homeCon = require("../controllers/homeCon");

adminRoute.get("/add-homeForm", homeCon.getAddHome);
adminRoute.post("/homeAdded", homeCon.postAddHome);

module.exports = adminRoute;
