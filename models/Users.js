
const { bookshelf } = require('./../config/database');

const User = bookshelf.Model.extend(
  {
    tableName: 'users'
  }
);

module.exports = bookshelf.model('User', User);
