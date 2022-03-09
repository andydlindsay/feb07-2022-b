const pg = require('pg');

// Pool - managed collection of clients
// const Pool = pg.Pool;

// Client - single connection
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



const verb = process.argv[2];
const id = process.argv[3];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillainName = process.argv[4];
    client.query(`
      UPDATE movie_villains 
      SET villain = $2 
      WHERE id = $1;
    `, [id, newVillainName])
      .then(() => {
        console.log('villain was updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const villainMovie = process.argv[4];
    client.query(`
      INSERT INTO movie_villains (villain, movie)
      VALUES ($1, $2);
    `, [villainName, villainMovie])
      .then(() => {
        console.log('villain had a bad day');
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain has been defeated');
        client.end();
      });
    break;

  default:
    console.log('please choose a valid verb');
    client.end();
}
