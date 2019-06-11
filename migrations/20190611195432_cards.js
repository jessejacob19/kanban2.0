    
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cards", table => {
    table.increments("id").primary();
    table.integer("columnId");
    table.string("title");
    table.string("description");
    table.string("position");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cards");
};