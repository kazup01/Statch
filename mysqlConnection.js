var mysql = require('mysql')

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: ''
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
