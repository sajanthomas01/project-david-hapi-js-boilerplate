const testHelper = require('../../helpers/test');

exports.about = {
  description: "about page",
  notes: "shows the about page",
  tags: ["api"],
  // auth: {
  //     strategy: 'session'
  // },
  auth: false,
  // plugins: {
  //     crumb: {
  //         key: 'crumb',
  //         source: 'payload',
  //         restful: true
  //     }
  // },
  handler: async (request, h) => {
    try {
      await testHelper.testInsert({name:'Sajan'});
      return h.view("home", {
        title: "Hello",
        message: "World"
      });
    } catch (error) {
      console.error(error);
    }
  }
};
