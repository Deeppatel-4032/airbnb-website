// core modules
const fs = require("fs");
const path = require("path");

// local module
const pathUtil = require("../utils/pathUtil");

module.exports = class Home {
  constructor(name, price, location, rating, imageURL) {
    this.name = name;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageURL = imageURL;
  }
  save() {
    Home.fetchhAll((registerHome) => {
      registerHome.push(this);
      const filePath = path.join(pathUtil, "data", "homeData.json");
      fs.writeFile(filePath, JSON.stringify(registerHome), (err) => {
        console.log("file write Concluded : ", err);
      });
    });
  }

  static fetchhAll(callBack) {
    const readPath = path.join(pathUtil, "data", "homeData.json");
    fs.readFile(readPath, (err, data) => {
      callBack(!err ? JSON.parse(data) : []);
    });
  }
};
