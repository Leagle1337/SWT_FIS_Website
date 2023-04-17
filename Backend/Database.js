var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE lecturer (lecturer_id INT(10), firstname VARCHAR(255), lastname VARCHAR(255))";
  var sql = "CREATE TABLE room (roomnumber VARCHAR(255), lecture VARCHAR(255), lecturer VARCHAR(255))";
  var sql = "CREATE TABLE lectures (lecture_id INT(10),lecturename VARCHAR(255))";
  var sql = "INSERT INTO lecturer (lecturer_id, firstname, lastname) VALUES ?";
  var values = [['1','Mirco','Sonntag']];
  var sql = "INSERT INTO lectures (lecture_id, lecturename) VALUES ?";
  var values = [['1','SWT']];
  var sql = "INSERT INTO room (roomnumber, lecture, lecturer) VALUES ?";
  var values = [['F1.010','SWT','Sonntag']];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});