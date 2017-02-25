var express = require('express')
var mysql = require('mysql')
var connection = require('./mysqlConnection')
var app = express()

connection.query('CREATE DATABASE IF NOT EXISTS statch', function (err){
  if(err) throw err;
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
})


connection.query('CREATE DATABASE IF NOT EXISTS bcode', function (err) {
    if (err) throw err;
});
