require('dotenv').config();
_config = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT
};

module.exports = {
  development: _config,
  production: _config
};