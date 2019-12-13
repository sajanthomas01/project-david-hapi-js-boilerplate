
const mongoose = require('mongoose');
const config = require('../config');
const chalk = require('chalk');
const path = require('path');

module.exports = {
  plugin: {
    name: 'mongoose',
    register: (server, options) => {
      mongoose.connect(`${config.db.host}:${config.db.port}/${config.db.name}`, function (err) {
        if (err) {
          console.log(chalk.white.bgRed.bold(err));
          throw err;
        }
      });
      mongoose.connection.on('connected', function () {
        console.log(chalk.white.bgGreen.bold('mongo db connected'));
      });

      mongoose.connection.on('disconnected', function () {
        console.log(chalk.white.bgYellow.bold('mongo db disconnected'));
      });

      // If the node process ends, close the mongoose connection 

      process.on('SIGINT', function () {
        mongoose.connection.close(function () {
          console.log(chalk.white.bgRed.bold('mongo db terminated'));
          process.exit(0);
        });
      });
    },
  }
}
