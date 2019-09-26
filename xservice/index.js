const http = require('http');
// const path = require('path');
const koa = require('koa');
// const kr = require('koa-router');
const r = require('./router/index');

const app = new koa();

app.use(r.routes())
    .use(r.allowedMethods());

app.use(async ctx => {
    ctx.body = "hello world";
});

http.createServer(app.callback())
    .listen('3000', () => {
        console.log('this service runing on port 3000');
    });