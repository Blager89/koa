require('dotenv').config();
const Koa = require('koa');
const koaJson = require('koa-json');
const koaParser = require('koa-bodyparser');

const app = new Koa();

app.use(koaParser());
app.use(koaJson({
  pretty: false
}));


if (!module.parent) {
  app.listen(process.env.PORT, () => {
    logger.info(`App running on port: ${process.env.PORT}`);
  });
}
require('./routes')(app);

app.listen(process.env.PORT);
module.exports = app;
