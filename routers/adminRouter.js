const express = require("express");
const adminRoute = express.Router();

// local module
const adminCon = require("../controllers/adminCon");

// get req
adminRoute.get("/add-homeForm", adminCon.getAddHome);
adminRoute.get("/admin-home", adminCon.getAdminHome);

// post req
adminRoute.post("/homeAdded", adminCon.postAddHome);

module.exports = adminRoute;
