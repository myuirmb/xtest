const kr = require('koa-router');
const service = require('./service');

const r = new kr();

r.use('/s', service.routes(), service.allowedMethods());

module.exports = r;