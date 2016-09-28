var config = require('../knexfile').development
var db = require('knex')(config)
var path = require('path')

module.exports = {
  getTask:   getTask
}

function getTask() {
  return db('todo').select()
}
