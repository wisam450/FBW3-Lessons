var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', [
  check('username').isEmail()
], function(req, res, next) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  res.status(200).send('accepted!');
  // res.send('respond with a resource');
});

module.exports = router;
