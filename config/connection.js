// // Set up MySQL connection.
// var mysql = require("mysql");
// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "@Lph@20!!",
//     database: "burgers_db"
//   });
// };

// // var connection = mysql.createConnection({
// //   host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// //   port: 3306,
// //   user: "f4eacne93uu8ugak",
// //   password: "tmu7jo3w2q3uasvq",
// //   database: "xrxk1fm1xb0io57b"
// // });

// // Make connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;
