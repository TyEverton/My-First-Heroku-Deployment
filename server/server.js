const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  
  res.sendFile( path.join(__dirname, '../index.html') )

})

app.use('/', function(req, res) {
  
  express.static( path.join(__dirname, "/server/styles.css"))

})

const port = process.env.PORT || 4915

app.listen(port, function () {
  console.log(`Server rockout out at ${port}`)
})

