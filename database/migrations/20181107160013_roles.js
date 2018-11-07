exports.up = async knex => {
  return knex.schema.createTable('roles', t => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
  })
};


exports.down = async knex => {
  return knex.schema.dropTable('roles');
};
