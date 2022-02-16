const net = require('net');
const port = 54321;

const server = net.createServer();
// console.log(server);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// array to hold all of our clients
const clients = [];

server.on('connection', (newClient) => {
  // console.log(newClient);
  console.log('a new client has connected!');

  // push the new connection into our array of clients
  clients.push(newClient);

  // send a message to the client
  newClient.write('welcome to the chat room!');

  // listen for incoming messages
  newClient.on('data', (messageFromClient) => {
    console.log('client says:', messageFromClient);

    // iterate through our array of clients and send the message to each one
    for (const client of clients) {
      if (client !== newClient) {
        client.write(messageFromClient);
      }
    }
  });

  // set the encoding to utf-8
  newClient.setEncoding('utf-8');
});
