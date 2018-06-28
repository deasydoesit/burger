// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";

      console.log(queryString);

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });

    },
    insertOne: function(table, value, cb) {
      var queryString = "INSERT INTO " + table + " (burger_name) VALUES " + "('" + value + "');";

      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });

    },
    updateOne: function(table, column, id, cb) {
      var queryString = "UPDATE " + table + " SET " + column + " = true WHERE id = " + id + ";";
  
      console.log(queryString);

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
  