var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.post('/', [
  check('username').isEmail(),
  check('password').isLength({ min: 5}).isAlphanumeric(),
  // check the date in format 'YYYY-MM-DD'
  check('dateofbirth').isISO8601(),
  check('age').isInt({min: 18, max: 120}),
  check('mobile').isMobilePhone('de-DE'),
  check('plz').isPostalCode('DE'),
  check('card').isCreditCard(),
  check('price').isCurrency({symbol: '$'}),
  check('ip').isIP(),
  check('url').isURL(),
  // how to make a custom message
  check('text').trim().not().isEmpty().withMessage('It is rejected because it is empty...'),
  check('email').trim().normalizeEmail().isEmail()
], function(req, res, next) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  res.status(200).json({req: req.body});
  // res.send('respond with a resource');
});

module.exports = router;
