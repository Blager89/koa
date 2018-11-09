import path from 'path'
import moment from 'moment'

// import CustomTransport from './customTransport'

import stripAnsi from 'strip-ansi'

import CONFIG from '../../config.json'
const { createLogger, format, transports } = require('winston');;

const { combine, printf } = format;

const frmtLog = printf(info => {
  // Remove Colors Characters
  const level = stripAnsi(info.level);
  const message = stripAnsi(info.message);

  const now = moment(info.timestamps).format('YYYY-MM-DD hh:mm:ss');

  return `[${now}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    frmtLog
  ),
  transports: [
    new transports.File({
      filename: path.join(CONFIG.LOGS, 'info.log'),
      level: 'info'
    }),
    new transports.File({
      filename: path.join(CONFIG.LOGS, 'warning.log'),
      level: 'warning'
    }),
    new transports.File({
      filename: path.join(CONFIG.LOGS, 'error.log'),
      level: 'error'
    }),
    new transports.File({
      filename: path.join(CONFIG.LOGS, 'combined.log')
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({
        all: true
      }),
      format.simple()
    )
  }));
}

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'logs/combined.log' })
//   ]
// });

// if (process.env.NODE_ENV !== 'productions') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

// logger.query({}, (err, result) => {
//   if (err) { throw err; }
//   console.log(result);
// });
// module.exports = logger;
