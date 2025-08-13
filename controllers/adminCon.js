const home = require("../models/homeModel");

exports.getAddHome = (req, res) => {
  res.render("admin/edit-home", {
    pageTitle: "Add Home To Airbnb",
    currantPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  home.findById(homeId, (home) => {
    if (!home) {
      console.log("Not Found Editing Page");
      return res.redirect("/admin-home");
    }

    res.render("admin/edit-home", {
      home: home,
      pageTitle: "Your Edite Home",
      currantPage: "addHome",
      editing: editing,
    });
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

exports.postAddHome = (req, res) => {
  console.log("Home Registeration successful for : ", req.body);

  const { name, price, location, rating, imageUrl } = req.body;

  const createHome = new home(name, price, location, rating, imageUrl);
  createHome.save();

  res.render("admin/home-added");
};

exports.postUpdateHome = (req, res) => {
  const { id, name, price, location, rating, imageUrl } = req.body;

  const updateHome = new home(name, price, location, rating, imageUrl);
  updateHome.id = id;
  updateHome.save();

  res.redirect("/admin-home");
};

exports.postDeleteHome = (req, res) => {
  let { homeId } = req.params;

  home.deleteById(homeId, (error) => {
    if (error) {
      console.log("error while Deleteing >>> ", error);
    }
    res.redirect("/admin-home");
  });
};
