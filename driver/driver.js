'use strict';


const chalk = require('chalk');
require('dotenv').config();

const io = require('socket.io-client')
const host = 'http://localhost:3000';
// const capsConnection = io.connect(host)
const capsNamespace = io.connect(`${host}/caps-namespace`)

capsNamespace.on('pickup', payload => newPackage(payload))


function newPackage(payload) {
  setTimeout(delivery, 1000, payload)
  setTimeout(orderDelivered, 3000, payload)
}

function delivery(payload) {

  console.log(`${chalk.inverse.yellowBright('DRIVER:')}
  ${chalk.redBright.bold('Picked up order number ')} 
  ${chalk.bgRed.bold(payload.orderId)}`)

  capsNamespace.emit('en-route', payload)
}

function orderDelivered(payload) {

  console.log((`${chalk.inverse.yellowBright('DRIVER:')}
  ${chalk.greenBright.bold('Delivered order number ')} 
  ${chalk.inverse.green.bold(payload.orderId)}`))

  capsNamespace.emit('delivered', payload)
}


