const AboutController = require("../controllers/test/about");

module.exports = {
  method: "GET",
  path: "/about",
  config: AboutController.about
};
