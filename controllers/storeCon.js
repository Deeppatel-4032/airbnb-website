const Favourite = require("../models/favuriteModel");
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
  Favourite.getToFavourite((Favourites) => {
    home.fetchhAll((registerHome) => {
      const favouriteHouse = registerHome.filter((home) =>
        Favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        getfavouriteHouse: favouriteHouse,
        pageTitle: "My favourite List Details",
        currantPage: "favourite-list",
      });
    });
  });
};

exports.postAddToFavourite = (req, res) => {
  console.log("add to favourites", req.body);
  Favourite.addToFavourite(req.body.id, (err) => {
    if (err) console.log("error while marking favourite : ", err);
    res.redirect("/favourite-list");
  });
};

exports.getHoemDetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("_id", homeId);

  home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/home");
    } else {
      console.log("home details found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
        currantPage: "home",
      });
    }
  });
};
