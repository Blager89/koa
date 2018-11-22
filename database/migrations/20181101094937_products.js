
exports.up = async knex => {
  await knex.schema.createTable('products', t => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.integer('media_id').unsigned().notNull();
    t.decimal('price').nullable();
    t.string('author').nullable();
    t.string('category_id').nullable();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('products');
};
