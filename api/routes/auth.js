const { expressjwt: jwt } = require("express-jwt");
const secret = process.env.SECRET_KEY;

function getTokenFromHeader(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}

const auth = {
  required: jwt({
    secret,
    algorithms: ["sha2", "RS256", "HS256"],
    requestProperty: "payload",
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret,
    algorithms: ["sha2", "RS256", "HS256"],
    requestProperty: "payload",
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  }),
};

module.exports = auth;
