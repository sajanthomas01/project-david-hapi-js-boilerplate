const joi = require('@hapi/joi')
const envs = ['development', 'test', 'production'];
const dotenv = require('dotenv');
dotenv.config();
const constants = require('./utils/constants.js');
// Define config schema
// const schema = joi.object().keys({
//   'app.port': joi.number().default(6000),
//   'app.env': joi.string().valid(...envs).default(envs[0]),
//   'db.host': joi.string().default(constants.dbHost.localhost),
//   'db.port': joi.number().default(27017),
//   'db.name': joi.string().default(constants.dbName.dbname)
// })

// Build config
// add all config here 
const development = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000,
    env: process.env.NODE_ENV
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'project_david_dev'
  }
};
const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 3000,
    env: process.env.NODE_ENV
  },
  db: {
    host: process.env.TEST_DB_HOST || 'localhost',
    port: parseInt(process.env.TEST_DB_PORT) || 27017,
    name: process.env.TEST_DB_NAME || 'project_david_test'
  }
};

const production = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT) || 3000,
    env: process.env.NODE_ENV
  },
  db: {
    host: process.env.PROD_DB_HOST || 'localhost',
    port: parseInt(process.env.PROD_DB_PORT) || 27017,
    name: process.env.PROD_DB_NAME || 'project_david_prod'
  }
};

let selectedEnv = development;
switch (process.env.NODE_ENV || 'development') {
  case 'development':
    selectedEnv = development;
    break;

  case 'test':
    selectedEnv = test;
    break;

  case 'production':
    selectedEnv = production;
    break;

}
module.exports = selectedEnv
