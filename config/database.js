var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cisola',
    database: 'mafs'

    // host: 'cite1',
    // user: 'citeuser',
    // password: 'ltcite_2018',
    // database: 'mafs'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
