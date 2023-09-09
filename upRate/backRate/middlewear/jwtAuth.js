const { expressjwt: jwt } = require("express-jwt");

const SECRET_KEY = 'yourSecretKey'; // This should be stored in an environment variable for security

const jwtAuth = jwt({
  secret: SECRET_KEY,
  algorithms: ['HS256'],
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  }
}).unless({ path: ['/generate-token', '/', '/users', '/api/front-page-image', '/api/logo-image', '/api/restaurant-questions', '/api/restaurant-links', '/api/bulk-data'] }); // Exclude some routes

module.exports = jwtAuth;