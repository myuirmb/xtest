const kr = require('koa-router');
const seq = require('sequelize');
// const user = require('../maria/model/user');
const user = require('../service/user');

const r = new kr();

r.get('/getTest', async ctx => {
    ctx.body = { code: 0, data: {}, msg: 'ok' };
});

r.get('/cu', async ctx => {
    // const u=await user.create(ctx.request.user);
    try {
        const u = new user();
        const res = await u.create('sa', '123321');
        ctx.body = { code: 0, data: res, msg: 'ok' };
    }
    catch (e) {
        console.error(e);
        ctx.body = { code: 100500, data: {}, msg: 'service error' };
    }
});

r.get('/gu', async ctx => {
    const u = new user();
    console.log([seq.Op.not]);
    const res = await u.getall({
        where: {
            delflag: {
                [seq.Op.is]: null
            }
        }
    });
    ctx.body = { code: 0, data: res, msg: 'ok' };
});

module.exports = r;