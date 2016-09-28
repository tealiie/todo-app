var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var routes = require ('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/v1/tasks', routes.getList)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
