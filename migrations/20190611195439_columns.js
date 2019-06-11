exports.up = function(knex, Promise) {
  return knex.schema.createTable("columns", table => {
    table.increments("id").primary();
    table.string("name")
    table.integer("boardId");
    table.string("position"); //(0,0)
    table.integer("width");
    table.integer("height");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("columns");
};
