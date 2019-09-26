const kr = require('koa-router');

const r = new kr();

r.get('/getTest', async ctx => {
    ctx.body = { code: 0, data: {}, msg: 'ok' };
});

module.exports = r;