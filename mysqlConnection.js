const mysql = require('mysql')

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: ''
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
