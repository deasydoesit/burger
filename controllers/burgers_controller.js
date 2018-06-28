var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.selectAll( function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req);
  console.log(req.body);
  console.log(typeof req.body.burger_name)
  burgers.insertOne(req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
}); 

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burgers.updateOne(id, function(result) {
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("hello");
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
