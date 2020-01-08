var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

/* GET products listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

// GET http://localhost:3000/products/5e15bf6ce865442fc8748e2d
router.get('/:productId', async function (req, res, next) {
  // res.send(req.params.productId);
  let productId = req.params.productId;
  try {
    const products = await Product.findById(productId);
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

// update info for a particular product
// PUT http://localhost:3000/products/5e15bf6ce865442fc8748e2d?name='iPhone Y'&price=1000.0
router.put('/:productId', async function (req, res, next) {
  // res.send(req.params.productId);
  let productId = req.params.productId;
  let name = req.query.name;
  let price = req.query.price;
  console.log(req.query);
  try {
    const products = await Product.findByIdAndUpdate(productId,
      {
        name: name,
        price: price
      });
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

  module.exports = router;
