const { knexConnectionObject } = require('./config/database');


module.exports = {
  development: knexConnectionObject,
  production: knexConnectionObject,
  testing: knexConnectionObject
};
