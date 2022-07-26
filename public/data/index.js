const city = require("./city");
const users = require("./user");
// TODO: 변수명 변경해야합니다. 임의로 user_

const combinedRoutes = {
  city: city.region,
  users,
};

module.exports = () => combinedRoutes;
