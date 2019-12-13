
exports.index = {
  description: "index page",
  notes: "shows the index page",
  auth: false,

  handler: async (request, h) => {
    try {
      return h.view("home", {
        title: "Hello",
        message: "World"
      });
    } catch (error) {
      console.error(error);
    }
  }
};
