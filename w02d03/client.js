const net = require('net');

const config = {
  host: 'localhost',
  port: 54321
};

const socket = net.createConnection(config);

socket.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
});

socket.setEncoding('utf-8');

// socket.write('hello, I am new in town');

process.stdin.on('data', (userInputFromTerminal) => {
  // console.log('this is from the terminal:', userInputFromTerminal);
  socket.write(userInputFromTerminal);
});
