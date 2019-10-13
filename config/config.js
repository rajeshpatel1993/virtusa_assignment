// config.js
const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV; // 'dev' or 'port'

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || '',
        auth_token : process.env.DEV_AUTH_TOKEN
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || ''
    }
};

const config = {
    dev
};

module.exports = config[env];