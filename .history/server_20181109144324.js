require('dotenv').config();
const Koa = require('koa');
const koaJson = require('koa-json');
const koaParser = require('koa-bodyparser');
const logger = require('./libs/logger')(module);

const app = new Koa();

app.use(koaParser());
app.use(koaJson({
  pretty: false
}));


require('./routes')(app);

// app.listen(process.env.PORT);


if (!module.parent) {
  app.listen(process.env.PORT, () => {
    logger.info(`App running on port: ${process.env.PORT}`);
    logger.query(options, function (err, results) {
      if (err) {
        /* TODO: handle me */
        throw err;
      }
     
      console.log(results);
  });
}

module.exports = app;
