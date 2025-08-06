const home = require("../models/homeModel");

exports.getAddHome = (req, res) => {
  res.render("admin/add-home", {
    pageTitle: "Add Home To Airbnb",
    currantPage: "addHome",
  });
};

exports.postAddHome = (req, res) => {
  console.log("Home Registeration successful for : ", req.body);

  const { name, price, location, rating, imageUrl } = req.body;

  const createHome = new home(name, price, location, rating, imageUrl);
  createHome.save();

  res.render("admin/home-added", {
    pageTitle: "Home Added Successfully",
    currantPage: "homeAdded",
  });
};

exports.getAdminHome = (req, res) => {
  home.fetchhAll((registerHome) => {
    res.render("admin/adminHome-list", {
      homes: registerHome,
      pageTitle: "Admin house Page",
      currantPage: "admin-home",
    });
  });
};
