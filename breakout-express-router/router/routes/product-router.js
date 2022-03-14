const express = require('express');
const productQueries = require('../db/product-queries');
const router = express.Router();

router.use((req, res, next) => {
  // if (!req.cookies.user_id) {
  //   res.redirect('/login');
  // }

  console.log('the middleware in product router has fired');
  next();
});

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

// router.delete

module.exports = router;
