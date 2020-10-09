'use strict';


const chalk = require('chalk');
const events = require('./events.js');
require('./caps.js');

events.on('pickup', payload => newPackage(payload))

function newPackage(payload) {
  setTimeout(delivery, 1000, payload)
  setTimeout(orderDelivered, 3000, payload)
}

function delivery(payload) {

  console.log(`${chalk.inverse.yellowBright('DRIVER:')}
  ${chalk.redBright.bold('Picked up order number ')} 
  ${chalk.bgRed.bold(payload.orderId)}`)

  events.emit('en-route', payload)
}

function orderDelivered(payload) {

  console.log((`${chalk.inverse.yellowBright('DRIVER:')}
  ${chalk.greenBright.bold('Delivered order number ')} 
  ${chalk.inverse.green.bold(payload.orderId)}`))
  events.emit('delivered', payload)
}


// As a driver, I want to be notified when there is a package to be delivered
// As a driver, I want to alert the system when I have picked up a package and it is in transit
// As a driver, I want to alert the system when a package has been delivered