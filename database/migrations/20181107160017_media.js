
exports.up = async knex=> {
  return knex.schema.createTable('media', t => {
    t.increments();
    t.integer('product_id')
      .index()
      .notNull()
      .unsigned();
    t.string('file_key', 100)
      .notNullable()
      .unique();
    t.string('bucket').notNullable();
    t.string('type', 36)
      .nullable();
    t.timestamp('created_at').nullable().defaultTo(null);
    t.timestamp('updated_at').nullable().defaultTo(null);
    t.foreign('product_id')
      .references('products.id')
      .onDelete('CASCADE');
  });

};

exports.down = async knex =>{
  return knex.dropTable('media');
};
