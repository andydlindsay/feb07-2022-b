const pg = require('pg');

const Client = pg.Client;

const configObj = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

const client = new Client(configObj);

client.connect();

module.exports = client;
