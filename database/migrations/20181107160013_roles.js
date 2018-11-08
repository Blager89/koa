exports.up = async knex => {
  await knex.schema.createTable('roles', t => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
  });

  await knex.schema.createTable('user_roles', t => {
    t.integer('user_id').unsigned().index();
    t.integer('role_id').unsigned().index();
  });
  await knex.schema.table('user_roles', t => {
    t.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
    t.foreign('role_id')
      .references('roles.id')
      .onDelete('CASCADE');
  });
};


exports.down = async knex => {
  await knex.schema.dropTable('roles');
};
