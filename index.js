const express = require('express');

const app = express()
const path = require('path')
var port = process.env.PORT || 3000

var router = express.Router();
//Serve Static Files to Client from public directory
app.use('/public', express.static(path.join(__dirname, 'public')))


//check if server is running 
app.listen(port, () => {
  console.log(` listening on port ${port}`)
})
