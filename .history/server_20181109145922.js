require('dotenv').config();
const Koa = require('koa');
const koaJson = require('koa-json');
const koaParser = require('koa-bodyparser');
const logger = require('./libs/logger');

const app = new Koa();

app.use(koaParser());
app.use(koaJson({
  pretty: false
}));


require('./routes')(app);

const options = {
  from: new Date() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

if (!module.parent) {
  app.listen(process.env.PORT, () => {
    logger.info(`App running on port: ${process.env.PORT}`);
    logger.query(options, (err, results) => {
      if (err) {
        throw err;
      }

      console.log(results);
    });
  });
}

module.exports = app;
