const { forwardTo } = require("prisma-binding");

const Query = {
  artists: forwardTo("db"),
  artist: forwardTo("db"),
  exhibitions: forwardTo("db"),
  exhibition: forwardTo("db")
};

module.exports = Query;
