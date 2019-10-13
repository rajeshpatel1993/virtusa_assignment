//import config
const config = require("../config/config");

const DEV_AUTH_TOKEN = config['app'].auth_token;

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
 
  if (authHeader != DEV_AUTH_TOKEN) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  next();
};
