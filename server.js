const express = require('express')
const mysql = require('mysql')
const connection = require('./mysqlConnection')
const moment = require('moment')
const app = express()
const bodyParser = require('body-parser')

connection.query('CREATE DATABASE IF NOT EXISTS statch', function (err){
  if(err) throw err;
  connection.query('USE statch', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS comment('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'comment VARCHAR(30)'
            +  ')',
            function (err) {
                if (err) throw err;
            }
        );
        connection.query('CREATE TABLE IF NOT EXISTS timer('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'timer INT(30)'
            +  ')',
            function (err) {
                if (err) throw err;
            }
        );
  });
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.post('/comment', function (req, res) {
    connection.query('INSERT INTO comment SET ?', req.body,
        function (err, result) {
            if (err) throw err;
            res.send('Comment added to database with ID: ' + result.insertId);
        }
    );
});

app.post('/timer', function(req, res){
  connection.query('INSERT INTO timer SET ?', req.body,
      function(err, result){
          if(err) throw err;
          res.send('Ok, nice study!' + result.insertId);
      }
    );
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
})
