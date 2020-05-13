exports.up = function (knex) {
  return knex.schema.createTable("activities", (table) => {
    table.increments("id").primary();
    table.string("name", 256).notNullable();
    table.string("location", 128).notNullable();
    table.string("type", 128).notNullable();
    table.integer("activity_time_minutes").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("activities");
};
