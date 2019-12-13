const webpackConfig = require("./tasks/grunt-webpack");
const nodemonConfig = require("./tasks/grunt-nodemon");

module.exports = function (grunt) {
    grunt.initConfig({
        nodemon: nodemonConfig,
        webpack: webpackConfig
    });
    
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-webpack");
    grunt.registerTasks("start", ["build", "nodemon"]);
    grunt.registerTasks("build", ["webpack:dev"]);
    grunt.registerTasks("build:watch", ["webpack:watch"]);
};