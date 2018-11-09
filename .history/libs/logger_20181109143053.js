const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'productions') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
let options = {
  from: new Date() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'asc',
  fields: ['message']
};
logger.query(options, (err, result) => {
  if (err) {
    throw err;
  }

  console.log(result);
});
module.exports = logger;
