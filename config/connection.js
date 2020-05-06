var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "roottec0wcaaysn0yzp3",
  password: "cfs4q2ef6tau7w7n",
  database: "burger"
});
if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection =mysql.createConnection({
    hose: 'localhost',
    user: 'roor',
    password: 'hacktheplanet',
    database: 'todoagain_db'
  });
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
