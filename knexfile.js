// Update with your config settings.

const db_config = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: '3307',
      user: 'root',
      password: '1',
      database: 'koa'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds:{
      directory: './database/seeds'

    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: '3307',
      user: 'root',
      password: '1',
      database: 'koa'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seed:{
      directory: './database/seeds'
    }
  }


};

// module.exports = require('knex')db_config['development'];
module.exports = require('knex')(db_config.development);