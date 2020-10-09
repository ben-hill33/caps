'use strict';

/*
Main hub of the app
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
*/
const chalk = require('chalk');
const express = require('express');
const http = require('http')
const socketio = require('socket.io');

const events = require('./events.js');
require('./vendor.js');
require('./driver.js');

const app = express();
const server = http.createServer(app)
const io = socketio(server);

const port = process.env.PORT || 3000;

// server (emit) -> client (receive) --acknowledgement--> server
// client (emit) -> server (receive) --acknowledgement--> client
// socket.emit - refers to a single client
// io.emit - refers to every client

// socket param is an object that contians data about new connection. we can use methods on socket to communicate with client

io.on('connection', (socket) => {
  console.log('New Websocket connection')

  socket.on('pickup', payload => orderLog('pickup', payload))
})
events.on('en-route', payload => orderLog('en-route', payload))
events.on('thanks', payload => orderLog('thanks', payload))



function orderLog(event, payload) {
  let time = new Date();
  console.log(chalk.inverse.magenta('EVENT'),
    { event, time, payload })
}

server.listen(port, () => {
  console.log(`Server is up on ${port}!!`)
})

