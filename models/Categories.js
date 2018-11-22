const { bookshelf } = require('./../config/database');

const Categories = bookshelf.Model.extend(
  {
    tableName: 'categories',
    products() {
      return this.hasMany('Products');
    }
  },

);

module.exports = bookshelf.model('Categories', Categories);
