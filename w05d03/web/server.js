require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const villainQueries = require('./database/villain-queries');

const app = express();
const port = process.env.PORT || 12345;

// middleware
app.use(morgan('dev'));

// routes
app.get('/villains', (req, res) => {
  villainQueries.getVillains()
    .then((villains) => {
      res.json(villains);
    });
});



app.get('/villains/:id', (req, res) => {
  villainQueries.getVillainById(req.params.id)
    .then((villain) => {
      res.json(villain);
    });
});

// app.listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
