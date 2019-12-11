var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/broken', function(req, res, next) {
  throw new Error("Hey Joe something went wrong");
});

router.get('/forbidden', function(req, res, next) {
  let err = new Error('You are trying to access /forbidden');
  err.statusCode = 403; // code for forbidden
  console.log(err.message);
  next(err); // err.message
});

router.get('/download', function(req, res, next) {
  fs.readFile('/something.txt', )
});

module.exports = router;
