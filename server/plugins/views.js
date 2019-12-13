const path = require("path");
const config = require("../config");
const pkg = require("../../package.json");
const analyticsAccount = config.analyticsAccount;
const Handlebars = require("handlebars");

module.exports = {
  plugin: require("@hapi/vision"),
  options: {
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: "../views",
    layoutPath: "../views/layouts",
    //helpersPath: "../views/helpers",
    partialsPath: "../views/partials",
    layout: "base"
  }
};
