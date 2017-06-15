var mysql = require('mysql');
var config = require('../config/config');

var connection = mysql.createConnection({
    host     : config.dbHost,
    user     : config.dbUser,
    password : process.env.DB_PASSWORD,
    database : config.dbDatabase
});

connection.connect(function(error) {
    if (error) {
        console.error("Error connecting to database " + config.dbDatabase + " on " + config.dbHost + ": " + error.message);
        return;
    } else {
        console.log("Connected to MySQL database " + config.dbDatabase + " on " + config.dbHost);
    }
});

module.exports = connection;