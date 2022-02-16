# W02D03 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo
- [x] HTTP fundamentals

### Network
* machines connected together for the exchange of information

### Server/Client structure
* servers are devices that have information
* client is a device that wants information

### Internet Protocol (IP)
* address for the computer (street address)
* IPv4 and IPv6
  * IPv4 === 127.0.0.1, 255.142.67.48 256^4
  * IPv6 === 2001:db8:3333:4444:5555:6666:7777:8888
* Port numbers (condo number, unit number)
* We have 65,535 to choose from per internet connection

### Packets
* chop up message into litte pieces
* contain their order number 594/2081
* container the sender and the recipient info

### Transport Layer Protocols
* TCP Transport Control Protocol
  * requires a connection (3-way handshake)
  * cares if something arrives out of order or corrupted or not at all
  * reorder the packets

* UDP User Datagram Protocol
  * connectionless protocol
  * doesn't care if you received the message (anything that gets lost or corrupted is discarded)

```js
myArr.forEach((element) => {});
```

### HTTP
* Hyper-Text Transfer Protocol
* sits on top of TCP
* request / response cycle
* all requests are a combination of a verb and a path
* verb describes what we want to do
  * GET   => retrieving info
  * POST  => send information to the server
* path tells it what we want to do it to
  * /users
  * /cars
  * /messages

GET /messages
GET http://localhost:3000/messages

* one response per request
* response can contain data
* response has to contain a status code
  * 200
  * 404
  * 1xx routing codes
  * 2xx everything is good
  * 3xx normally redirections
  * 4xx something is wrong with your request
  * 5xx something has gone terribly wrong








