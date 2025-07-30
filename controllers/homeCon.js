const Home = require("../models/homeModel");

exports.getAddHome = (req, res) => {
  res.render("addHome", {
    pageTitle: "Add Home To Airbnb",
    currantPage: "addHome",
  });
};

exports.postAddHome = (req, res) => {
  console.log("Home Registeration successful for : ", req.body);

  const { name, price, location, rating, imageURL } = req.body;

  const createHome = new Home(name, price, location, rating, imageURL);
  createHome.save();

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currantPage: "homeAdded",
  });
};

exports.getHome = (req, res) => {
  Home.fetchhAll((registerHome) => {
    res.render("home", {
      homes: registerHome,
      pageTitle: "airbnb Home.com",
      currantPage: "home",
    });
  });
};
