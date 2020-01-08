var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

/* GET products listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  try {
    const products = await Product.find();
    res.status(200).send(products); 
  } catch (e) {
    next(e);
  }
});

module.exports = router;
