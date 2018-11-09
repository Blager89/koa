const moment = require('moment');
const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, label, printf, colorize
} = format;

const consoleTransport = new transports.Console();
const consoleTransportFile = new transports.File({ filename: 'error.log', level: 'error' });
consoleTransport.silent = process.env.LOG_ENABLED !== 'true';

const convertTs = ts => moment(ts).format('YYYY-MM-DD HH:mm');

const lFormat = printf(i => `${convertTs(i.timestamp)} ${i.level} [${i.label}]: ${i.message}`);

const dblFormat = printf(i => `${convertTs(i.timestamp)} ${i.level} ${i.message}`);

const options = {
  from: new Date() - (24 * 60 * 60 * 1000),
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

//
// Find items logged between today and yesterday.
//
createLogger.query(options, (err, results) => {
  if (err) {
    /* TODO: handle me */
    throw err;
  }

  console.log(results);
});

module.exports = module => {
  const l = module.filename.replace(process.cwd(), '').substr(1);
  return createLogger({
    level: 'verbose',
    format: combine(colorize(), label({ label: l }), timestamp(), lFormat),
    transports: [consoleTransport, consoleTransportFile]
  });
};

module.exports.dblogger = () => createLogger({
  level: 'verbose',
  format: combine(colorize(), label(), timestamp(), dblFormat),
  transports: [consoleTransport]
});
