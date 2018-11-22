const { bookshelf } = require('./../config/database');

const Products = bookshelf.Model.extend(
  {
    tableName: 'products',
    categories() {
      return this.belongsTo('Categories');
    },
    media() {
      return this.hasMany('Media');
    }
  }
);

module.exports = bookshelf.model('Products', Products);
