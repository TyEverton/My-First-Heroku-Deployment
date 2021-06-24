const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {
  
  res.sendFile( path.join(__dirname, '../index.html', '../styles.css') )

})

const port = process.env.PORT || 4915

app.listen(port, function () {
  console.log(`Server rockout out at ${port}`)
})

