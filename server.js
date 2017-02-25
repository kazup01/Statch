const express = require('express')
const mysql = require('mysql')
const connection = require('./mysqlConnection')
const app = express()

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
