var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Trailing cloud 9 options!')
})

app.listen(8000, function () {
  console.log('Example app listening on port nisha  8000!')
})
