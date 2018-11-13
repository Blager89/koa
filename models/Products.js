const { bookshelf } = require('./../config/database');


const Products = bookshelf.Model.extend(
  {
    tableName: 'Products'
  }
);

module.exports = bookshelf.model('Products', Products);
