var db = require('./db.js')

module.exports = {
  getList: getList
}

function getList(req, res) {
  db.getTask()
    .then(function(tasks) {
      res.json(tasks)
    })
    .catch(function(err) {
      res.send(err.message).status(500)
    })
}
