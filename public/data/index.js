const city = require("./city");
const users = require("./dummyUser");

const combinedRoutes = {
  city: city.region,
  user: users,
};

module.exports = () => combinedRoutes;
