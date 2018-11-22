const { bookshelf } = require('./../config/database');


const Media = bookshelf.Model.extend(
  {
    tableName: 'media',
    hidden: [
      'bucket'
    ],
    products() {
      return this.belongsTo('Products');
    }
  }
);

module.exports = bookshelf.model('Media', Media);
