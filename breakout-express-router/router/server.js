require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require the routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// set up the routers as middleware
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
