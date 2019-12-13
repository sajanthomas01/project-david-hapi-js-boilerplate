const HomeController = require("../controllers/test/home");

module.exports = {
  method: "GET",
  path: "/",
  config: HomeController.index
};
