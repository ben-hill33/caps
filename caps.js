'use strict';

/*
Main hub of the app
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
*/
// const debug = require('debug');
const chalk = require('chalk');
const express = require('express');
const http = require('http')
const socketio = require('socket.io');

// const events = require('./events.js');
require('./vendor.js');
require('./driver.js');

const app = express();
const server = http.createServer(app)
const io = socketio(server);

const port = process.env.PORT || 3000;

socket.on('join', (room) => {
  socket.join(room)
})

io.on('connection', (socket) => {
  console.log('New Websocket connection', socket.id)

  // create and accept on a namespace called caps
  // with namespace monitor join event
  // vendor and driver get their own room so they ONLY get their own notifications
  socket.on('pickup', payload => orderLog('pickup', payload))
  // socket.on('en-route', payload => orderLog('en-route', payload))
  // socket.on('thanks', payload => orderLog('thanks', payload))

});

const capsConnection = io.emit('/caps-connection');

capsConnection.on('connection', (socket) => {
  socket.on('', (payload) => {
    capsConnection.emit('swallow', payload);
  })
});


// events.on('pickup', payload => orderLog('pickup', payload))
// events.on('en-route', payload => orderLog('en-route', payload))
// events.on('thanks', payload => orderLog('thanks', payload))


function orderLog(event, payload) {
  let time = new Date();
  console.log(chalk.inverse.magenta('EVENT'),
    {
      event,
      time,
      payload
    })
}

server.listen(port, () => {
  console.log(`Server is up on ${port}! Happy coding!`)
})
