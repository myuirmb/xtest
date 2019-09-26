const sequelize = require('sequelize');
const config = require('../config/config');

const seq = new sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.conn
);

module.exports = seq;