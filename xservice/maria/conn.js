const seq = require('sequelize');
const config = require('../config/config');

const conn = new seq(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.conn
);

module.exports = conn;