// core modules
const fs = require("fs");
const path = require("path");

// local module
const pathUtil = require("../utils/pathUtil");
const filePath = path.join(pathUtil, "data", "homeData.json");

module.exports = class Home {
  constructor(name, price, location, rating, imageUrl) {
    this.name = name;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }
  save() {
    this.id = Math.floor(Math.random() * 100).toString();
    Home.fetchhAll((registerHome) => {
      registerHome.push(this);
      fs.writeFile(filePath, JSON.stringify(registerHome), (err) => {
        console.log("file write Concluded : ", err);
      });
    });
  }

  static fetchhAll(callBack) {
    fs.readFile(filePath, (err, data) => {
      callBack(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callBack) {
    this.fetchhAll((homes) => {
      const foundHome = homes.find((home) => home.id === homeId);
      callBack(foundHome);
    });
  }
};
