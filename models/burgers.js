var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", "devoured", id, function(res) {
      cb(res);
    });
  }
};  

module.exports = burgers;
