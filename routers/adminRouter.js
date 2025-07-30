const express = require("express");
const adminRoute = express.Router();

// local module
const adminCon = require("../controllers/adminCon");

adminRoute.get("/add-homeForm", adminCon.getAddHome);
adminRoute.post("/homeAdded", adminCon.postAddHome);

adminRoute.get("/admin-home", adminCon.getAdminHome);

module.exports = adminRoute;
