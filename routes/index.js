var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'han_kang' });
});

//test json
router.get('/', function(req, res, next) {
  fs.readFile('database/todo.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.render('index', {todo:JSON.parse(data)});

  });
});
module.exports = router;
