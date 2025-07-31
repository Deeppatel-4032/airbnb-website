const home = require("../models/homeModel");

exports.getIndex = (req, res) => {
  home.fetchhAll((registerHome) => {
    res.render("store/index", {
      homes: registerHome,
      pageTitle: "airbnb Home.com",
      currantPage: "index",
    });
  });
};

exports.getHome = (req, res) => {
  home.fetchhAll((registerHome) => {
    res.render("store/home-list", {
      homes: registerHome,
      pageTitle: "airbnb Home.com",
      currantPage: "home",
    });
  });
};

exports.getBookings = (req, res) => {
  res.render("store/booking-list", {
    pageTitle: "My Booking List Details",
    currantPage: "booking-list",
  });
};

exports.getFavourite = (req, res) => {
  res.render("store/favourite-list", {
    pageTitle: "My favourite List Details",
    currantPage: "favourite-list",
  });
};

exports.getHoemDetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("_id", homeId);

  res.render("store/home-detail", {
    pageTitle: "Home Details",
    currantPage: "home",
  });
};
