const Mongoose = require('mongoose');
const Test = require('../models/test');
exports.testInsert = async (data) => {
  return new Promise(async function (resolve, reject) {
      try {
          let test = new Test(data);
          await test.save();
          return resolve({ statusCode: 201, message: 'test inserted' });
      } catch (error) {
          return reject(error);
      }
  });
};
