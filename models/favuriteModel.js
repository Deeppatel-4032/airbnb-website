// core modules
const fs = require("fs");
const path = require("path");

// local module
const pathUtil = require("../utils/pathUtil");
const favouriteFilePath = path.join(pathUtil, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callBack) {
    Favourite.getToFavourite((favourites) => {
      if (favourites.includes(homeId)) {
        callBack("home id already include in favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteFilePath, JSON.stringify(favourites), callBack);
      }
    });
  }

  static getToFavourite(callBack) {
    fs.readFile(favouriteFilePath, (err, data) => {
      callBack(!err ? JSON.parse(data) : []);
    });
  }

  static deleteById(delHomeId, callBack) {
    Favourite.getToFavourite((homes) => {
      const fevouriteHome = homes.filter((homeId) => delHomeId !== homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(fevouriteHome), callBack);
    });
  }
};
