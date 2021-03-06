const knexInstance = require('knex');
const bookshelfInstance = require('bookshelf');
const knexLogger = require('./../libs/knexLoggerQueries');
require('dotenv').config();

const knexConnectionObject = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
  pool: {
    min: 1,
    max: 1
  }
};
const knex = knexInstance(knexConnectionObject);
const bookshelf = bookshelfInstance(knex);

bookshelf.plugin('registry');
bookshelf.plugin('virtuals');
bookshelf.plugin('visibility');
bookshelf.plugin('pagination');

if (process.env.LOG_ENABLED === 'true') {
  knex.on('query', knexLogger.query);
  knex.on('query-response', knexLogger.query_response);
}

module.exports = { bookshelf, knex, knexConnectionObject };
