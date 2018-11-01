
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', t =>{
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.text('path').notNull();
    t.decimal('price').nullable();

    t.string('author').nullable();
    t.string('category').nullable();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
