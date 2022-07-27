const city = require("./city");
const users = require("./user");

const combinedRoutes = {
  city: city.region,
  users,
};

module.exports = () => combinedRoutes;
