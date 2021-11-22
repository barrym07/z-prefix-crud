
exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.date('created_at').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};
