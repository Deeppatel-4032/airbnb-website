// core module
const express = require("express");
const userRoute = express.Router();

// local module
const hoemcon = require("../controllers/homeCon");

userRoute.get("/", hoemcon.getHome);

module.exports = userRoute;
