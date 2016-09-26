
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todo', function (table) {
    table.increment('id').primary()
    table.string('task')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo')
}
