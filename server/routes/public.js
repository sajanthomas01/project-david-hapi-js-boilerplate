const staticController = require("../controllers/public/static");

module.exports = [
  {
    method: "GET",
    path: "/robots.txt",
    config: staticController.robots
  },

  {
    method: "GET",
    path: "/assets/css/{path*}",
    config: staticController.css
  },
  {
    method: "GET",
    path: "/assets/js/{path*}",
    config: staticController.js
  },
  {
    method: "GET",
    path: "/assets/images/{path*}",
    config: staticController.images
  },
];
