exports.up = knex => knex.schema.createTable('users', t => {
  t.increments();
  t.string('fullname', 50).notNullable().comment('User full name');
  t.string('email', 50).notNullable().unique();
  t.string('password', 60).notNullable();
  t.timestamp('created_at').nullable().defaultTo(null);
  t.timestamp('updated_at').nullable().defaultTo(null);
  t.collate('utf8_general_ci');
});

exports.down = knex => knex.schema.dropTableIfExists('users');