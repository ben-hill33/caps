'use strict';

/*
Main hub of the app
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
*/
const chalk = require('chalk');
require('dotenv').config()


const port = process.env.PORT || 3000;
const io = require('socket.io')(port);


io.on('connection', (socket) => {
  console.log(chalk.inverse.yellowBright('CONNECTED'), socket.id)


})

const capsNamespace = io.of('/caps-namespace')

capsNamespace.on('connection', (socket) => {
  socket.on('join', room => {

    console.log('VENDOR CONNECTED ON ROOM: ', room)
    socket.join(room)
  })
  socket.on('delivered', payload => {
    orderLog('delivered', payload);
    capsNamespace.to(payload.store).emit('delivered', payload);
  })

  console.log('CONNECTED', socket.id)

  socket.on('pickup', payload => orderLog('pickup', payload))
  socket.on('en-route', payload => orderLog('en-route', payload))

})

function orderLog(event, payload) {
  let time = new Date();
  console.log(chalk.inverse.magenta('EVENT'),
    { event, time, payload })
  capsNamespace.emit(`${event}`, payload);
}
