const { expressjwt } = require("express-jwt");
require("dotenv/config");

function authJwt(req, res) {
  const secret = process.env.secret;

  return expressjwt({
    secret: secret,
    algorithms: ["HS256"],
    isRevoked: isRevokedCallback,
  }).unless({
    path: [
      // backend/public/uploads
      // regular expressions
      // ^(.+)\/([^\/]+)$
      { url: /\/public\/uploads(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/contestant(.*)/, methods: ["PUT", "GET", "POST", "OPTIONS"] },
      { url: /\/school(.*)/, methods: ["GET", "OPTIONS"] },
      // { url: /\/student${:id}/, methods: ["GET", "OPTIONS"] },
      { url: /^\/student\/.*id/, methods: ["GET", "OPTIONS"] },

      `/user/register`,
      `/user/login`,

      // `/student/${req.params.id}`
    ],
  });
}

async function isRevokedCallback(req, { payload }) {
  if (payload.isAdmin === false) {
    return { isRevoked: true, path: req.params.id };
  }
  return { isRevoked: false, path: req.params.id };
}

module.exports = authJwt;
