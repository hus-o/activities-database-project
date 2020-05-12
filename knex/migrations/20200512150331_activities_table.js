exports.up = function(knex) {
    return knex.schema.createTable('activities', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('location', 256)
        table.integer("activity_time_minutes")
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("activities")
};