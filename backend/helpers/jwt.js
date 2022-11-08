const { expressjwt } = require("express-jwt");
require("dotenv/config");

function authJwt() {
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
      { url: /^\/student\/(.*)/, methods: ["GET", "POST", "PUT", "OPTIONS"] },    
      { url: /^\/user\/(.*)/, methods: ["GET", "POST", "PUT", "OPTIONS"] },

      // `/user/register`,
      // `/user/login`,
    ],
  });
}

async function isRevokedCallback(req, { payload }) {
  if (payload.isAdmin === false) {
    return true;
  }
  return false;
}

module.exports = authJwt;
