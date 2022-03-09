const client = require('./connection');

const getVillains = () => {
  return client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      return response.rows;
    });
};

const getVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getVillains,
  getVillainById
};
