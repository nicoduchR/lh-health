let mysql = require('mysql');

const USERNAME = process.env.username;
const PASSWORD = process.env.password;
const NODE_ENV = process.env.NODE_ENV || 'LOCAL';

// if(USERNAME == undefined || PASSWORD == undefined || NODE_ENV == undefined){
//   throw "Environment parameter missing";
// }

// ENV INIT
if (NODE_ENV == 'PROD') {
  var host = 'localhost';
  var database = 'health'
  var username = USERNAME;
  var password = PASSWORD;

  console.log("Production Environment");

} else {
  console.log("Development Environment");

  var host = 'localhost';
  var database = 'lh'
  var username = 'root';
  var password = 'redlab11';
}

// Connection to database
var connection = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: database
});

connection.connect(function (err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
