const city = require("./city");
const users = require("./dummyUser");
// TODO: 변수명 변경해야합니다. 임의로 user_
const user_ = require("./user");

const combinedRoutes = {
  city: city.region,
  user: users,
  users: user_,
};

module.exports = () => combinedRoutes;
