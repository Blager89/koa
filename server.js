const Koa = require('koa');
const koaJson = require('koa-json');
const koaParser = require('koa-bodyparser');
const app = new Koa();

app.use(koaParser());
app.use(async ctx => {
  ctx.body = ctx.request.body;
});
app.use(koaJson({
  pretty: false
}));




require('./routes')(app);

app.listen(3000);
module.exports = app;


