// core module
const express = require("express");
const storeRouter = express.Router();

// local module
const storeCon = require("../controllers/storeCon");

storeRouter.get("/index", storeCon.getIndex);
storeRouter.get("/home", storeCon.getHome);
storeRouter.get("/booking-list", storeCon.getBookings);
storeRouter.get("/favourite-list", storeCon.getFavourite);

storeRouter.get("/home-details/:homeId", storeCon.getHoemDetails);
module.exports = storeRouter;
