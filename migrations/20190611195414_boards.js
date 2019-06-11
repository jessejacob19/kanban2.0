
exports.up = function(knex, Promise) {
  return knex.schema.createTable("boards", table => {
    table.increments("id").primary();
    table.string("name");
    table.integer("accountId");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("boards");
};
